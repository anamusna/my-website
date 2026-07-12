import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Theme } from "../../../context/EnvironmentContext";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: Theme;
  icon?: IconDefinition;
  error?: string;
  label?: string;
  helper?: string;
}

const Input: React.FC<InputProps> = ({
  theme,
  icon,
  error,
  label,
  helper,
  className = "",
  ...props
}) => {
  const styleClasses = {
    container: "space-y-1",
    label: "block text-sm font-medium text-grey-primary",
    inputWrapper: "relative",
    input: `
      w-full
      px-3 py-2
      ${icon ? "pl-10" : ""}
      border rounded-lg
      text-sm
      transition-colors duration-200
      focus:outline-none focus:ring-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${
        error
          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
          : `border-grey-dividers focus:border-navy-primary focus:ring-navy-primary/20
             dark:border-grey-primary dark:focus:border-dark-primary dark:focus:ring-dark-primary/20`
      }
      ${
        theme === "dark"
          ? "bg-bg-dark text-dark-text placeholder-grey-primary"
          : "bg-white text-light-text placeholder-grey-primary"
      }
    `,
    icon: "absolute left-3 top-1/2 -translate-y-1/2 text-grey-primary",
    error: "text-sm text-red-500",
    helper: "text-sm text-grey-primary",
  };

  return (
    <div className={`${styleClasses.container} ${className}`}>
      {label && <label className={styleClasses.label}>{label}</label>}
      <div className={styleClasses.inputWrapper}>
        {icon && <FontAwesomeIcon icon={icon} className={styleClasses.icon} />}
        <input className={styleClasses.input} {...props} />
      </div>
      {error && <p className={styleClasses.error}>{error}</p>}
      {helper && !error && <p className={styleClasses.helper}>{helper}</p>}
    </div>
  );
};

export default Input;
