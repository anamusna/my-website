import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive as defaultResponsive } from "../styles/responsive";

const CarouselComponent = ({
  responsive = defaultResponsive,
  swipeable = true,
  draggable = true,
  showDots = false,
  className = "",
  ssr = true,
  infinite = true,
  autoPlay = true,
  autoPlaySpeed = 1000,
  keyBoardControl = true,
  customTransition = "all .5",
  transitionDuration = 500,
  containerClass = `carousel-container mx-auto ${className}`,
  removeArrowOnDeviceType = [],
  deviceType = "desktop",
  itemClass = "carousel-item-padding-10-px",
  children,
}: any) => {
  return (
    <div className="col-12 ">
      <Carousel
        swipeable={swipeable}
        draggable={draggable}
        showDots={true}
        responsive={responsive}
        ssr={ssr}
        arrows={false}
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        customTransition={customTransition}
        transitionDuration={transitionDuration}
        containerClass={containerClass}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        deviceType={deviceType}
        itemClass={itemClass}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
