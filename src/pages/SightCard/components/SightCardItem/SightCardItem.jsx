import React from "react";
import PropTypes from "prop-types";

import { Gallery } from "../";

export default function SightCardItem({ description, images, title }) {
  const [isOpenGallary, setOpenGallary] = React.useState(false);

  const handleToggleGallary = () => {
    setOpenGallary(!isOpenGallary);
  };
  return (
    <div className="sight__main-block">
      <div className="sight__item-text">
        <p>{description}</p>
      </div>
      <div className="sight__img" onClick={handleToggleGallary}>
        <img
          src={images[0]}
          alt={title}
          className="sight__item-main-pic"
        />
      </div>
      {isOpenGallary && (
        <Gallery images={images} handleToggleGallary={handleToggleGallary} />
      )}
    </div>
  );
}

SightCardItem.propTypes = {
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
