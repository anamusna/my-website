import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface SlideProps {
  leftElement?: React.ReactNode;
  slideItems?: React.ReactNode[] | JSX.Element[];
  slideElement?: any;
  rightElement?: React.ReactNode;
  className?: string;
  from?: string;
}

export const SlideContent = ({
  slideElement,
  from = "left",
  className = "",
}: SlideProps) => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateSliding(slideContentRef.current);
  }, [slideContentRef, from]);

  const animateSliding = (element: HTMLDivElement | null) => {
    const slideOnScrollOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      slideOnScrollOptions
    );

    if (element) {
      slideOnScrollObserver.observe(element);
    }
  };

  return (
    <div
      ref={slideContentRef}
      className={`slide-content slide-content-from-${from} ${className}`}
    >
      {slideElement}
    </div>
  );
};

export const PictureSlide = ({
  slideElement,
  from = "up",
  className = "",
}: SlideProps) => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateSliding(slideContentRef.current);
  }, [slideContentRef, from]);

  const animateSliding = (element: HTMLDivElement | null) => {
    const slideOnScrollOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      slideOnScrollOptions
    );

    if (element) {
      slideOnScrollObserver.observe(element);
    }
  };

  return (
    <div
      ref={slideContentRef}
      className={`slide-content slide-content-from-${from} ${className}`}
    >
      {slideElement}
    </div>
  );
};

export const TestimonialSlide = ({
  slideElement,
  from = "through",
  className = "",
}: SlideProps) => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={slideContentRef}
      className={`testimonial-slider ${from} ${className}`}
    >
      {slideElement}
    </div>
  );
};

export const Slide: React.FC<SlideProps> = ({
  slideItems = [],
  slideElement,
  from = "left",
  className = "",
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const testimonials: any[] = t("testimonials.groupTwo", {
    returnObjects: true,
  });

  useEffect(() => {
    animateSliding(slideRef.current);
  }, [slideRef, from, currentSlideIndex, slideItems]);

  const animateSliding = (element: HTMLDivElement | null) => {
    const slideOnScrollOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("appear");
          observer.unobserve(entry.target);

          const interval = setInterval(() => {
            if (slideItems)
              setCurrentSlideIndex((prevIndex) =>
                prevIndex < slideItems.length - 1 ? prevIndex + 1 : 0
              );
          }, 5000);
          return () => clearInterval(interval);
        });
      },
      slideOnScrollOptions
    );

    if (element) {
      slideOnScrollObserver.observe(element);
    }
  };

  return (
    <div
      ref={slideRef}
      key={testimonials[currentSlideIndex].name}
      className={`row mx-md-3 mx-auto my-4 slide-body slide-body-from-${from} ${className}`}
    >
      <div className="pt-4 bg-gray-2 rounded-4 position-relative">
        {testimonials[currentSlideIndex].testimony}
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

export const SlideContents = ({
  leftElement,
  rightElement,
  className = "col-md-6",
}: SlideProps) => {
  const leftContent = useRef<HTMLDivElement>(null);
  const rightContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateSliding(leftContent.current);
    animateSliding(rightContent.current);
  }, []);

  const animateSliding = (element: HTMLDivElement | null) => {
    const slideOnScrollOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      slideOnScrollOptions
    );

    if (element) {
      slideOnScrollObserver.observe(element);
    }
  };

  return (
    <div className="slide-content-wrapper row pt-3 d-flex flex-column justify-content-between text-center flex-md-row text-md-left">
      <div
        ref={leftContent}
        className={`slide-content slide-content-from-left ${className}`}
      >
        {leftElement}
      </div>
      <div
        ref={rightContent}
        className={`slide-content slide-content-from-right ${className}`}
      >
        {rightElement}
      </div>
    </div>
  );
};
