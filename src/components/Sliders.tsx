import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface SlideProps {
  leftElement?: React.ReactNode;
  slideItems?: React.ReactNode[] | JSX.Element[];
  slideElement?: any;
  rightElement?: React.ReactNode;
  className?: string;
  from?: string;
  key?: string;
}

export const animateSliding = (element: HTMLDivElement | null) => {
  const slideOnScrollOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };

  const slideOnScrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          observer.observe(entry.target);
        } else {
          entry.target.classList.add("appear");
          //observer.unobserve(entry.target);
        }
      });
    },
    slideOnScrollOptions
  );

  if (element) {
    slideOnScrollObserver.observe(element);
  }
};

export const useSlideAnimation = (elementRef: React.RefObject<HTMLDivElement>, from: string) => {
  useEffect(() => {
    animateSliding(elementRef.current);

  }, [elementRef, from]);
};

const SlideComponent: React.FC<SlideProps> = ({
  leftElement,
  rightElement,
  slideElement,
  slideItems = [],
  from = "left",
  className = "",
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const testimonials: any[] = t("testimonials.groupTwo", {
    returnObjects: true,
  });

  useSlideAnimation(slideRef, from);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex < slideItems.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlideIndex, slideItems]);

  return (
    <div
      ref={slideRef}
      key={testimonials[currentSlideIndex].name}
      className={`row mx-md-3 mx-auto my-4 slide-body slide-body-from-${from} ${className}`}
    >
      <div className="pt-4 bg-gray-2 rounded-4 position-relative">
        {slideElement || testimonials[currentSlideIndex].testimony}
      </div>
      <div className="mb-4 text-start">
        <div className="text-start arrow-down mb-4 ms-6"></div>
        <div className="d-flex mx-5 align-items-center gap-4">
          <div className="fw-bold">
            {testimonials[currentSlideIndex].name},{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SlideContent = ({ leftElement,
  slideItems,
  slideElement,
  rightElement,
  className,
  from,
 // key
} : SlideProps) => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(slideContentRef, from || "left");
  return (
    <div
      ref={slideContentRef}
      //key={key}
      className={`slide-content slide-content-from-${from || "left"} ${className}`}
    >
      {slideElement}
    </div>
  );
};

export const SlideContents: React.FC<SlideProps> = (props) => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(leftContentRef, "left");
  useSlideAnimation(rightContentRef, "right");

  return (
    <div className="slide-content-wrapper ">
      <div
        ref={leftContentRef}
        className={`slide-content slide-content-from-left ${props.className}`}
      >
        {props.leftElement}
      </div>
      <div
        ref={rightContentRef}
        className={`slide-content slide-content-from-right ${props.className}`}
      >
        {props.rightElement}
      </div>
    </div>
  );
};

export default SlideComponent;
