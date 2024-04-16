import React from 'react';
import { SlideContent } from './Sliders';
import Work from './Work';
import { ColophonSocialMedia } from './ColophonSocialMedia';
import ProfileImage from "../styles/images/ansu-bg.png";

interface CombinedBannerImageProps {
  withWork?: boolean;
  image?: any;
}

const BannerImage = ({ withWork, image } : CombinedBannerImageProps) => {
  return (
    <SlideContent
      className={withWork ? "banner-img order-1 order-md-0 mx-auto" : "col-6 mx-auto order-1 mb-4 order-md-0 mx-auto"}
      from="up"
      slideElement={
        <div className={withWork ? "d-flex flex-column" : "hero-img hero-container"}>
          {withWork && (
            <div className="d-none d-md-flex">
              <Work />
            </div>
          )}
          <div className="hero-img hero-container">
            <img
              className={image ? "rounded-circle img-fluid" :"img-fluid py-md-5 ps-md-5"}
              src={image ? image : ProfileImage}
              alt="Ansumana"
            />
          </div>
          {withWork && (
            <ul className="d-flex d-md-none text-secondary mx-auto mt-4 d-flex list-unstyled mb-md-0 gap-4">
              {ColophonSocialMedia}
            </ul>
          )}
        </div>
      }
    />
  );
};

export default BannerImage;
