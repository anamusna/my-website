import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive as defaultResponsive } from "../styles/responsive";

const CarouselComponent = ({
  wrapperClass ='',
  responsive = defaultResponsive,
  swipeable = true,
  draggable = true,
  showDots = true,
  slidesToSlide = "",
  className = "",
  ssr = true,
  focusOnSelect = true,
  rewind = false,
  arrows = true,
  minimumTouchDrag = 50,
  infinite = false,
  autoPlay = false,
  autoPlaySpeed = 1000,
  keyBoardControl = true,
  customTransition = "all .5",
  transitionDuration = 500,
  containerClass = `mx-auto ${className}`,
  removeArrowOnDeviceType = ["tablet", "mobile"],
  deviceType = "desktop",
  dotListClass = "custom-dot-list-style text-primary",
  itemClass = `inner-container`,
  children,
}: any) => {
  return (
    <div className={`outer-container ${wrapperClass}`}
    >
      <Carousel
        swipeable={swipeable}
        draggable={draggable}
        showDots={showDots}
        responsive={responsive}
        ssr={ssr}
        infinite={infinite}
        autoPlay={autoPlay}
        slidesToSlide={slidesToSlide}
        focusOnSelect={focusOnSelect}
        rewind={rewind}
        arrows={arrows}
        minimumTouchDrag={minimumTouchDrag}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        customTransition={customTransition}
        transitionDuration={transitionDuration}
        containerClass={containerClass}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        deviceType={deviceType}
        dotListClass={dotListClass}
        itemClass={itemClass}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
