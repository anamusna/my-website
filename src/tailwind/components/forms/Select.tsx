import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  theme?: "light" | "dark";
  icon?: IconDefinition;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  theme = "light",
  icon,
  label,
  placeholder,
  disabled = false,
  error,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          className="block text-sm font-medium mb-1 text-body"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            block w-full rounded-md shadow-sm
            ${icon ? "pl-10" : "pl-3"}
            pr-10 py-2
            ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:border-primary-500"
                : "bg-white text-gray-900 border-gray-300 focus:border-primary-500"
            }
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "focus:ring-primary-500"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            transition-colors duration-200
            focus:outline-none focus:ring-1
          `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div
          className={`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
