import React from "react";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";

export interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "error" | "info";
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  theme?: "light" | "dark";
  className?: string;
  label?: string;
  shape?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showValue = false,
  animated = false,
  striped = false,
  shape = "circle",
  theme = "light",
  className = "",
  label,
}) => {
  const { fontSize } = useEnvironmentSettings();

  // Ensure value is between 0 and max
  const normalizedValue = Math.min(Math.max(0, value), max);
  const percentage = (normalizedValue / max) * 100;

  // Size classes
  const sizeClasses = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  };

  // Variant classes
  const variantClasses = {
    default: {
      bar: "bg-blue-500",
      text: "text-blue-700 dark:text-blue-300",
    },
    success: {
      bar: "bg-green-500",
      text: "text-green-700 dark:text-green-300",
    },
    warning: {
      bar: "bg-yellow-500",
      text: "text-yellow-700 dark:text-yellow-300",
    },
    error: {
      bar: "bg-red-500",
      text: "text-red-700 dark:text-red-300",
    },
    info: {
      bar: "bg-cyan-500",
      text: "text-cyan-700 dark:text-cyan-300",
    },
  };

  // Animation classes
  const animationClasses = animated
    ? "transition-all duration-500 ease-in-out"
    : "";

  // Stripe classes
  const stripeClasses = striped
    ? "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:30px_30px]"
    : "";

  const shapeClasses: any = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  return (
    <div
      className={`relative w-full ${className}`}
      role="progressbar"
      aria-valuenow={normalizedValue}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
    >
      <div
        className={`w-full ${shapeClasses[shape]} overflow-hidden ${
          sizeClasses[fontSize || size]
        } ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
      >
        <div
          className={`h-full ${shapeClasses[shape]} ${variantClasses[variant].bar} ${animationClasses} ${stripeClasses}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div
          className={` absolute inset-0 flex items-center justify-center text-sm font-medium ${variantClasses[variant].text}`}
        >
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
