import React from "react";
import clsx from "clsx";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../elements/Icon";
import { ToggleProps } from "../../../tailwind/types/forms/toggle";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  size = "md",
  theme = "light",
  onChange,
  disabled = false,
  label,
  icon,
}) => {
  const sizeClasses = {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3",
      translate: "translate-x-4",
    },
    md: {
      track: "w-12 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-6",
    },
    lg: {
      track: "w-16 h-8",
      thumb: "w-7 h-7",
      translate: "translate-x-8",
    },
  };

  const themeClasses = {
    light: {
      track: "bg-gray-200",
      thumb: "bg-white",
      checkedTrack: "bg-blue-500",
      checkedThumb: "bg-white",
    },
    dark: {
      track: "bg-gray-700",
      thumb: "bg-gray-800",
      checkedTrack: "bg-indigo-600",
      checkedThumb: "bg-white",
    },
  };

  const handleToggleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const { track, thumb, checkedTrack, checkedThumb } = themeClasses[theme];
  const { track: trackSize, thumb: thumbSize, translate } = sizeClasses[size];

  return (
    <div className="flex items-center space-x-2">
      {label && (
        <span className="text-sm font-medium text-body">
          {label}
        </span>
      )}
      <button
        onClick={handleToggleChange}
        disabled={disabled}
        className={clsx(
          "relative inline-flex items-center transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
          trackSize,
          checked ? checkedTrack : track,
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <span
          className={clsx(
            "inline-block rounded-full transition-transform duration-200 ease-in-out",
            thumbSize,
            checked ? `${translate} ${checkedThumb}` : thumb
          )}
        />
        {icon && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Icon
              icon={icon}
              size={size as any}
              fixedWidth
              aria-hidden="true"
              className="text-white"
            />
          </span>
        )}
      </button>
    </div>
  );
};

export default Toggle;
