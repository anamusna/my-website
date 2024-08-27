import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHashnode, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

interface SocialMediaItem {
  name: string;
  label: string;
  icon: any;
  color: string,
  href: string;
}

export const SocialMediaItems: SocialMediaItem[] = [
  {
    name: "linkedin",
    label: "Linkedin",
    icon: faLinkedin,
    color: "rgb(10, 102, 194)",
    href: "https://www.linkedin.com/in/ansumana-darboe",
  },
  {
    name: "github",
    label: "Github",
    icon: faGithub,
    color: "rgb(49, 49, 49)",
    href: "https://github.com/anamusna",
  },
  {
    name: "hashnode",
    label: "Hashnode",
    icon: faHashnode,
    color: "rgb(0, 0, 255)",
    href: "https://ansumana.hashnode.dev",
  },
];

export const ColophonSocialMedia = SocialMediaItems.map((item, index) => {

  const socialIconColors = [
    "text-secondary",
    "text-gray",
     "rgb(0, 0, 255)",
  ]

  const color = socialIconColors[index]

  return (
    <li key={`colophonSocialMeda-${item.name}`}>
      <a
        className=""
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          aria-label={item.label}
          fixedWidth
          className={color}
          color={color}
          icon={item.icon}
          size="xl"
        />
      </a>
    </li>
  );
});

export const SocialMedia = ({ item, index } : any) => {
  const { theme } = useContext<any>(ThemeContext);
  const { textColor } = useThemeStyles(theme);

  const isDarkTheme = !!(theme === "dark");

  const socialIconColors = [
    isDarkTheme ? "text-white" : "text-secondary-1",
    textColor,
    isDarkTheme ? "text-white" : "rgb(0, 0, 255)",
  ];

  const color = socialIconColors[index];
  
  return (
    <li key={`colophonSocialMeda-${item.name}`}>
      <a className="" href={item.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          aria-label={item.label}
          fixedWidth
          className={color}
          color={color}
          icon={item.icon}
          size="xl"
        />
      </a>
    </li>
  );
};
