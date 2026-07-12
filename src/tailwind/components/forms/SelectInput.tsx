import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Select from "react-select";
import { SelectInputProps } from "../../types/forms/selectInput";
import Icon from "../elements/Icon";
import { Label } from "../elements/Typography";

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  defaultValue,
  placeholder,
  onChange,
  label,
  name,
  theme = "light",
  isSearchable = true,
  value,
  className,
  id,
  required,
  "aria-required": ariaRequired,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
}) => {
  const themeColors = {
    light: {
      primaryColor: "#FFFFFF",
      borderColor: "#BDBDBD",
      textColor: "#000000",
    },
    dark: {
      primaryColor: "#000000",
      borderColor: "#374151",
      textColor: "#FFFFFF",
    },
  };

  const themeConfig = themeColors[theme] || themeColors.light;
  const { primaryColor, borderColor, textColor } = themeConfig;
  const inputId = id || name;

  return (
    <div className={`select-input-wrapper ${className}`}>
      {label && (
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
      <Select
        inputId={inputId}
        aria-label={ariaLabel || label}
        aria-required={ariaRequired || required}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        theme={(baseTheme) => ({
          ...baseTheme,
          colors: {
            ...baseTheme.colors,
            primary25: "#E5E5E5",
            primary: primaryColor,
            neutral0: primaryColor,
            neutral20: borderColor,
            neutral80: textColor,
          },
        })}
        styles={{
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#F9FAFB" : primaryColor,
            color: textColor,
          }),
          control: (base) => ({
            ...base,
            backgroundColor: primaryColor,
            borderColor: borderColor,
            color: textColor,
            boxShadow: "none",
            minWidth: "10rem",
            flex: 1,
          }),
        }}
        className="w-full rounded-lg"
        options={options}
        components={{
          DropdownIndicator: () => (
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            >
              <Icon icon={faCaretDown} fixedWidth />
            </div>
          ),
        }}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange as any}
        placeholder={placeholder}
        isSearchable={isSearchable}
        required={required}
      />
    </div>
  );
};

export default SelectInput;
