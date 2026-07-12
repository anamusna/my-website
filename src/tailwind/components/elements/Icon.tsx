import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import { IconProps } from "../../types/elements/icon";

// Map our size values to valid FontAwesome sizes
const sizeMap: Record<string, SizeProp> = {
  xs: "xs",
  sm: "sm",
  md: "lg",
  lg: "xl",
  xl: "2xl",
  "2xl": "3x",
  "3xl": "4x",
  "4xl": "5x",
};

const Icon = ({
  icon = faCheck,
  size = "lg",
  color,
  spin = false,
  pulse = false,
  fixedWidth = true,
  style,
  theme = "light",
  onClick,
  className,
  rotation,
  flip,
  border = false,
  pull,
  transform,
  inverse = false,
  beat = false,
  shake = false,
}: IconProps) => {
  const { fontSize } = useEnvironmentSettings();

  // Map the size to a valid FontAwesome size
  const getMappedSize = (inputSize: string): SizeProp => {
    return sizeMap[inputSize] || "lg";
  };

  const iconClassName = `transition-transform duration-300 ${className || ""}`;

  return (
    <FontAwesomeIcon
      icon={icon}
      size={getMappedSize(fontSize || size)}
      color={color}
      spin={spin}
      pulse={pulse}
      fixedWidth={fixedWidth}
      style={style}
      onClick={onClick}
      className={iconClassName}
      rotation={rotation}
      flip={flip}
      border={border}
      pull={pull}
      transform={transform}
      inverse={inverse}
      beat={beat}
      shake={shake}
    />
  );
};

export default Icon;
