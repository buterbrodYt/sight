import React from "react";

import "./styles.scss";

import { Slider } from "../../../../components";

export default function Gallery({ images, handleToggleGallary }) {
  const backGallery = React.useRef();
  React.useEffect(() => {
    const closeGallery = (e) => {
      if (e.key == "Escape") {
        handleToggleGallary();
      } else if (e.target == backGallery.current) {
        handleToggleGallary();
      }
    };

    window.addEventListener("keydown", closeGallery);
    window.addEventListener("mousedown", closeGallery);
    return () => (
      window.removeEventListener("keydown", closeGallery),
      window.removeEventListener("mousedown", closeGallery)
    );
  }, [handleToggleGallary]);
  return (
    <div ref={backGallery} className="gallery">
      <Slider cls={"gallery"}>
        {images &&
          images.map((src, index) => (
            <img key={index} src={src} alt={index} className="gallery__slide" />
          ))}
      </Slider>
    </div>
  );
}
