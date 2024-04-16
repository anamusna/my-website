import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AvatarProps {
  alt?: string;
  icon?: any;
  children?: React.ReactNode;
  style?: object;
  iconColor?: string;
  iconClassName?: string;
  dot?: boolean;
  onClick?: () => void;
  dotColor?: string;
  image?: string;
  initials?: string;
  size: any;
  className?: string;
}

const Avatar = ({
  image,
  iconClassName,
  iconColor = "",
  initials,
  dot = true,
  onClick,
  size = "lg",
  icon,
  className = "bg-white",
}: AvatarProps) => {

  return (
    <div
      className={`avatar d-flex align-items-center avatar-${size} ${
        icon ? `border-${iconColor} ` : ""
      } ${className}`}
      onClick={onClick}
    >
      {dot && <div className={`avatar-dot bg-success `}></div>}
      {image ? (
        <img src={image} alt={`avatar-${size}`} />
      ) : icon ? (
        <FontAwesomeIcon
          className={`icon text-center border-0  ${iconClassName} ${
            iconColor ? `text-${iconColor} ` : ""
          } `}
          icon={icon}
          size="2x"
          fixedWidth
        />
      ) : (
        <div className="avatar-text text-primary">{initials}</div>
      )}
    </div>
  );
};

export default Avatar;
