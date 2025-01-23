import React from "react";

import { Slider } from "../../../../components";
import slide1 from "../../../../assets/img/slider1.png";
import slide2 from "../../../../assets/img/slider2.png";
import slide3 from "../../../../assets/img/slider3.png";
import slide4 from "../../../../assets/img/slider4.png";
import "./styles.scss";

export default function SliderMain() {
  return (
    <section className="slider">
      <div className="slider__container">
        <div className="slider__top">
          <h2 className="slider__top-title title">Набережные Челны</h2>
          <a href="./sight.html" className="slider__top-text">
            Достопримечательности
          </a>
        </div>
        <Slider cls={"slider"}>
          <img className="slider__slide" src={slide1} alt="1" />
          <img className="slider__slide" src={slide2} alt="2" />
          <img className="slider__slide" src={slide3} alt="3" />
          <img className="slider__slide" src={slide4} alt="4" />
        </Slider>
      </div>
    </section>
  );
}
