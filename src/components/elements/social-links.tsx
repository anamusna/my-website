import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faHashnode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  allSocialLinks as defaultSocialLinks,
  LinksProps,
} from "../../data/about/social-links";

export type { LinksProps };

interface SocialLinksProps {
  className?: string;
  size?: SizeProp;
  variant?: "default" | "header" | "footer" | "minimal";
  layout?: "horizontal" | "vertical";
  showLabels?: boolean;
  spacing?: "compact" | "normal" | "wide";
  showHashnode?: boolean;
  socialLinks?: LinksProps[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  variant = "default",
  layout = "horizontal",
  showLabels = false,
  spacing = "normal",
  showHashnode = true,
  socialLinks = [],
}) => {
  const mergedLinks = [
    ...defaultSocialLinks,
    ...socialLinks.filter(
      (link) =>
        !defaultSocialLinks.some((existing) => existing.href === link.href),
    ),
  ];

  const mappedSocialLinks = showHashnode
    ? mergedLinks
    : mergedLinks.filter((link) => link.icon !== faHashnode);

  const getSpacing = () => {
    switch (spacing) {
      case "compact":
        return layout === "horizontal" ? "gap-3 sm:gap-4" : "gap-2";
      case "wide":
        return layout === "horizontal" ? "gap-6 sm:gap-8" : "gap-4";
      default:
        return layout === "horizontal" ? "gap-4 sm:gap-6" : "gap-3";
    }
  };

  const getLayoutClasses = () => {
    const baseClasses =
      layout === "horizontal"
        ? "flex items-center"
        : "flex flex-col items-center";
    return `${baseClasses} ${getSpacing()}`;
  };

  const getVariantClasses = () => {
    const baseClasses =
      "group inline-flex items-center justify-center transition-colors duration-300 min-h-[44px] min-w-[44px] rounded-lg hover:text-heading";

    switch (variant) {
      case "header":
        return `${baseClasses} p-2`;
      case "footer":
        return `${baseClasses} p-2 sm:p-3`;
      case "minimal":
        return `${baseClasses} p-1`;
      default:
        return `${baseClasses} p-2`;
    }
  };

  const getIconSize = () => {
    if (variant === "header") return "w-5 h-5 sm:w-6 sm:h-6";
    if (variant === "footer") return "w-5 h-5 sm:w-6 sm:h-6";
    if (variant === "minimal") return "w-4 h-4 sm:w-5 sm:h-5";
    return "w-6 h-6 sm:w-7 sm:h-7";
  };

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {mappedSocialLinks.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={getVariantClasses()}
          aria-label={link.label}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={link.icon}
              className={`${getIconSize()} text-muted ${link.hoverColor} transition-colors duration-300`}
            />
            {showLabels && (
              <span className="text-sm font-medium text-muted group-hover:text-heading transition-colors duration-300">
                {link.label}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
