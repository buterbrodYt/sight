import React from "react";
import PropTypes from "prop-types";

import arrowLeft from "../../assets/img/arrow-left.svg";
import arrowRight from "../../assets/img/arrow-right.svg";
// import './styles.scss';

export default function Slider({ children, cls }) {
  const sliderWrap = React.useRef();
  const Leftarrow = React.useRef();
  const Rightarrow = React.useRef();
  let currentIndex = 0;

  const moveToIndex = (index) => {
    sliderWrap.current.style.transition = "transform 0.6s ease-in-out";
    sliderWrap.current.style.transform = `translateX(-${100 * index}vw)`;
  };

  const handleClickSlide = (index) => {
    if (index > 3) {
      Rightarrow.current.disabled = true;
    }
    if (index <= 0) {
      Leftarrow.current.disabled = true;
    } else {
      Rightarrow.current.disabled = false;
      Leftarrow.current.disabled = false;
    }
  };

  const prevSlide = (index) => {
    if (index >= 0) {
      --index;
      handleClickSlide(index);
      moveToIndex(index);
      currentIndex = index;
    }
  };

  const nextSlide = (index) => {
    if (index < children.length - 1) {
      ++index;
      handleClickSlide(index);
      moveToIndex(index);
      currentIndex = index;
    }
  };

  return (
    <>
      <div className={`${cls}__view`}>
        <div className={`${cls}__wrap`} ref={sliderWrap}>
          {children}
        </div>
      </div>
      <div className={`${cls}__nav`}>
        <button
          ref={Leftarrow}
          onClick={() => prevSlide(currentIndex)}
          className={`${cls}__nav-back`}
        >
          <img src={arrowLeft} alt="arrow_left" className={`${cls}__nav-pic`} />
        </button>
        <button
          ref={Rightarrow}
          onClick={() => nextSlide(currentIndex)}
          className={`${cls}__nav-next`}
        >
          <img
            src={arrowRight}
            alt="arrow_right"
            className={`${cls}__nav-pic`}
          />
        </button>
      </div>
    </>
  );
}

Slider.propTypes = {
  children: PropTypes.any.isRequired,
  cls: PropTypes.string.isRequired,
};
