import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHashnode, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialMediaItem {
  name: string;
  label: string;
  icon: any;
  href: string;
}

const SocialMediaItems: SocialMediaItem[] = [
  {
    name: "linkedin",
    label: "Linkedin",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/ansumana-darboe",
  },
  {
    name: "github",
    label: "Github",
    icon: faGithub,
    href: "https://github.com/anamusna",
  },
  {
    name: "hashnode",
    label: "Hashnode",
    icon: faHashnode,
    href: "https://ansumana.hashnode.dev",
  },
];

export const ColophonSocialMedia = SocialMediaItems.map((item) => {
  return (
    <li key={`colophonSocialMedia-${item.name}`}>
      <a
        className=""
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          aria-label={item.label}
          fixedWidth
          className=""
          icon={item.icon}
          size="xl"
        />
      </a>
    </li>
  );
});
