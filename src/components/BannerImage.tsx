import React, { useRef } from 'react';
import { SlideContent, useSlideAnimation } from './Sliders';
import ProfileImage from "../styles/images/ansu1.png";

interface CombinedBannerImageProps {
  withWork?: boolean;
  image?: any;
  className?: string;
}

const BannerImage = ({ image, className } : CombinedBannerImageProps) => {
  return (
    <SlideContent
      className={`testimonial-image ${!image ? "banner-img mx-auto" : "col-6 mx-auto order-1 mb-4 order-md-0 mx-auto"}`}
      from="right"
      slideElement={
        <img
        className={`img-fluid  ${image ? "rounded-circle mb-4" :  `rounded-4 ${className}` }`}
        src={image ? image : ProfileImage}
        style={{
          backgroundPosition: "cover"
        }}
        alt="Ansumana"
      />
      }
    />
  );
};

export const HomeBanner = ({
  className,
} : any) => {
  const slideContentRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(slideContentRef, "left");
  return (
    <div
      ref={slideContentRef}
      className={`slide-content slide-content-from-left my-md-4 order-md-2 banner-img mx-auto rounded-4 ${className}`}
      style={{
        backgroundImage: `url(${ProfileImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export default BannerImage;
