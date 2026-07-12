import React, { forwardRef } from "react";
import { TextareaProps } from "../../../tailwind/types/forms/textarea";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      label,
      placeholder = "Type here...",
      value,
      onChange,
      className = "",
      theme = "light",
      disabled = false,
      rows = 4,
      maxLength,
    },
    ref
  ) => {
    const themeClasses =
      theme === "dark"
        ? "bg-black text-white border-gray-700 placeholder-gray-500 focus:ring-orange-primary"
        : "bg-white text-black border-gray-300 placeholder-gray-400 focus:ring-blue_primary";

    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label
            htmlFor={name}
            className="block font-medium mb-1 text-body"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className={`w-full px-4 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 ${themeClasses}`}
        />
      </div>
    );
  }
);

export default Textarea;
