import React, { useRef, RefObject } from "react";

export const useBackToBottom = () => {
  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    technologies: useRef<HTMLDivElement | null>(null),
    resume: useRef<HTMLDivElement | null>(null),
    testimonials: useRef<HTMLDivElement | null>(null),
    process: useRef<HTMLDivElement | null>(null),
    blog: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  const goToSection = (section: keyof typeof sectionRefs) => {
    const sectionRef = sectionRefs[section].current;
    if (sectionRef) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return [sectionRefs, goToSection] as const;
};


export const useScrollToDiv = () => {

  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    technologies: useRef<HTMLDivElement | null>(null),
    resume: useRef<HTMLDivElement | null>(null),
    testimonials: useRef<HTMLDivElement | null>(null),
    process: useRef<HTMLDivElement | null>(null),
    blog: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  const goToSection = (section: keyof typeof sectionRefs) => {
   
    const sectionRef = sectionRefs[section].current;
    
    if (sectionRef) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return [sectionRefs, goToSection] as const;
};

export const useBackToTop = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const goToTop = () => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return [divRef, goToTop] as const;
};

type SectionRefs = Record<
  "home" | "about" | "services" | "technologies" | "resume" | "testimonials" | "process" | "blog" | "contact",
  RefObject<HTMLDivElement | null>
>;

export const useScrollToSection = () => {
  const sectionRefs: SectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    technologies: useRef(null),
    resume: useRef(null),
    testimonials: useRef(null),
    process: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };

  const goToSection = (section: keyof SectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return [sectionRefs, goToSection] as const;
};
