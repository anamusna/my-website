import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarProps {
  alt?: string;
  icon?: any; 
  style?: React.CSSProperties; 
  iconColor?: string;
  label?: string;
  iconClassName?: string;
  dot?: boolean;
  onClick?: () => void;
  dotColor?: string; 
  image?: string;
  initials?: string;
  size: 'sm' | 'md' | 'lg' | (string & {}); 
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  label,
  iconClassName,
  iconColor = '',
  initials,
  dot = true,
  onClick,
  size = 'lg',
  icon,
  className = 'bg-white',
}) => {
  return (
    <div
      className={`avatar d-flex align-items-center avatar-${size} ${
        icon ? `border-${iconColor}` : ''
      } ${className}`}
      onClick={onClick}
    >
      {dot && <div className={`avatar-dot bg-success`} />}
      {image ? (
        <div className="d-flex flex-column w-100">
          <img src={image} alt="avatar" className="img-fluid" />
          {label && <small className="testimony-name fw-bold">{label}</small>}
        </div>
      ) : icon ? (
        <FontAwesomeIcon
          className={`icon text-center border-0 ${iconClassName} ${
            iconColor ? `text-${iconColor}` : ''
          }`}
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
