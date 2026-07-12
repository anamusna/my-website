import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useRef, useState } from "react";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import Icon from "../elements/Icon";
import { Label } from "../elements/Typography";
import SelectInput from "./SelectInput";

export interface FormControlProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
  theme?: "light" | "dark";
  options?: { value: string; label: string; ariaLabel?: string }[];
  icon?: IconDefinition;
  field?: string;
  displayLabel?: boolean;
  caption?: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  formErrors?: {
    isValid?: boolean;
    [key: string]: any;
  };
  handleChange?: (e: any) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  user?: any;
  value?: any;
  name?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: any;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  required?: boolean;
  "aria-required"?: boolean | "true" | "false";
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  "aria-label"?: string;
  id?: string;
  disabled?: boolean;
}

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  (
    {
      name,
      type,
      label = "",
      displayLabel = true,
      caption,
      leftIcon,
      rightIcon,
      className = "",
      defaultValue,
      options,
      formErrors,
      handleChange,
      onChange,
      onChangeSelect,
      field,
      user,
      onKeyDown,
      placeholder,
      theme = "light",
      icon,
      value,
      required,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const [passwordDisplayed, setPasswordDisplayed] = useState(false);
    const [selectedOption, setSelectedOption] = useState<any>(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const { fontSize } = useEnvironmentSettings();

    const isValid = formErrors?.isValid;
    const message = field ? formErrors?.[field] : undefined;
    const isValidInput = Boolean(isValid);
    const isInValidInput = isValid === false;
    const showErrorMessage = isInValidInput && message;

    const isTypePassword = type === "password";
    const isTypeSelect = type === "select";

    const togglePasswordDisplay = () => {
      setPasswordDisplayed(!passwordDisplayed);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      } else if (handleChange) {
        handleChange(e);
      }
    };

    const handleSelectChange = (selectedOption: any) => {
      const newSelectedOption = Array.isArray(selectedOption)
        ? selectedOption[0]
        : selectedOption;

      if (onChangeSelect) {
        const syntheticEvent = {
          target: {
            value: newSelectedOption.value,
            name: field || name,
          },
        } as React.ChangeEvent<HTMLSelectElement>;
        onChangeSelect(syntheticEvent);
      } else if (handleChange) {
        handleChange(newSelectedOption);
      }

      setSelectedOption(newSelectedOption);
    };

    const themeColors = {
      light: `bg-white text-primary-light-900 border-primary-light-200 focus:border-primary-light-500 focus:ring-primary-light-500`,
      dark: `bg-primary-dark-50 text-primary-dark-50 border-primary-dark-700 focus:border-primary-dark-500 focus:ring-primary-dark-500`,
    };

    const themeClasses = themeColors[theme] || themeColors.light;

    const inputClasses = `
      w-full px-4 py-2
      ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}
      border ${
        formErrors
          ? "border-red-500"
          : theme === "dark"
            ? "border-gray-600"
            : "border-gray-300"
      }
      rounded-lg
      focus:outline-none focus:ring-2 focus:ring-primary
      disabled:opacity-50 disabled:cursor-not-allowed
      ${icon ? "pl-10" : ""}
      ${className || ""}
    `;

    const inputId = id || field || name;

    return (
      <div className={`block ${field !== "date" ? "mb-4" : ""}  ${className}`}>
        {displayLabel && label && (
          <Label
            htmlFor={inputId}
            className={`block font-medium ${
              theme === "dark" ? "text-dark-text" : "text-light-text"
            }`}
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-hidden="true">
                *
              </span>
            )}
          </Label>
        )}
        <div className={`relative`}>
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={icon}
                className={`text-gray-400 ${
                  theme === "dark" ? "text-gray-500" : ""
                }`}
                aria-hidden="true"
              />
            </div>
          )}
          {isTypeSelect ? (
            <SelectInput
              options={options || []}
              value={value || selectedOption}
              placeholder={placeholder || label || name}
              theme={theme}
              className="w-full"
              onChange={handleSelectChange}
              id={inputId}
              required={required}
              {...props}
            />
          ) : (
            <input
              ref={inputRef}
              name={field || name}
              id={inputId}
              onKeyDown={onKeyDown}
              onChange={handleInputChange}
              defaultValue={user?.[field as string] || defaultValue}
              //value={defaultValue ?? value ?? ""}
              type={isTypePassword && passwordDisplayed ? "text" : type}
              placeholder={placeholder}
              className={inputClasses}
              required={required}
              autoComplete="on"
              autoFocus
              {...props}
            />
          )}

          {isTypePassword && (
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordDisplay}
              aria-label={
                passwordDisplayed ? "Passwort verbergen" : "Passwort anzeigen"
              }
            >
              <Icon
                icon={passwordDisplayed ? faEye : faEyeSlash}
                fixedWidth
                aria-hidden="true"
              />
            </button>
          )}
          {leftIcon && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Icon icon={leftIcon} fixedWidth aria-hidden="true" />
            </div>
          )}
        </div>
        {showErrorMessage && (
          <p
            className="text-red-500 text-sm"
            role="alert"
            id={`${inputId}-error`}
          >
            {message}
          </p>
        )}
        {caption && (
          <p className="text-gray-500 text-xs" id={`${inputId}-caption`}>
            {caption}
          </p>
        )}
      </div>
    );
  }
);

export default FormControl;
