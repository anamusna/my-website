import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SegmentedControlOption {
  value: string;
  label: string;
  icon?: IconDefinition;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  theme?: "light" | "dark";
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  theme = "light",
}) => {
  return (
    <div
      className={`inline-flex rounded-lg p-1 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
      role="tablist"
    >
      {options.map((option) => (
        <button
          key={option.value}
          role="tab"
          aria-selected={value === option.value}
          onClick={() => onChange(option.value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
            transition-all duration-200 ease-in-out
            ${
              value === option.value
                ? theme === "dark"
                  ? "bg-gray-700 text-white shadow-sm"
                  : "bg-white text-gray-900 shadow-sm"
                : theme === "dark"
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {option.icon && (
            <FontAwesomeIcon icon={option.icon} className="text-base" />
          )}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
