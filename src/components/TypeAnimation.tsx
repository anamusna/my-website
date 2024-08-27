import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

export const WordFlick = () => {
  const { t } = useTranslation();
  const [part, setPart] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const skipDelay = 15;
  const speed = 70;

  const services = t("about.services", { returnObjects: true }) as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        if (offset >= services[serviceIndex].length) {
          setSkipCount((prev) => {
            if (prev + 1 === skipDelay) {
              setIsForward(false);
              return 0;
            }
            return prev + 1;
          });
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setIsForward(true);
          setServiceIndex((prev) => (prev + 1) % services.length);
          setOffset(0);
        } else {
          setOffset((prev) => prev - 1);
        }
      }
      setPart(services[serviceIndex].substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, isForward, serviceIndex, services]);

  return (
    <div className="p explainer align-self-end align-self-md-center text-uppercase fw-bolder animated-text">
      {part}
    </div>
  );
};

interface TypingAnimationProps {
  texts: string[];
  cursor?: boolean;
  repeat?: number;
  speed?: any;
}

const TypingAnimation = ({
  texts = [],
  cursor = false,
  repeat = 0,
  speed = 40,
}: TypingAnimationProps) => {
  return (
    <TypeAnimation
      sequence={["", 500, ...texts.flatMap((text) => [text, 300]), 1000]}
      className="header-brand-text align-self-end align-self-md-center text-uppercase fw-bolder"
      wrapper="p"
      cursor={cursor}
      speed={speed}
      repeat={repeat}
    />
  );
};

export const TypingAnimations = ({
  texts = [],
  cursor = false,
  repeat = 0,
  speed = 40,
}: TypingAnimationProps) => {
  const { i18n } = useTranslation();
  const [currentTexts, setCurrentTexts] = useState<string[]>(texts);

  useEffect(() => {
    setCurrentTexts(texts);
  }, [texts, i18n.language]);

  const sequence = currentTexts.flatMap((text) => [text, 1000]);

  return (
    <TypeAnimation
      sequence={sequence}
      className="animated-text header-brand-text align-self-end align-self-md-center text-uppercase fw-bolder"
      wrapper="p"
      cursor={cursor}
      speed={speed}
      repeat={repeat}
    />
  );
};

export default TypingAnimation;
