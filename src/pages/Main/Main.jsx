// eslint-disable-next-line no-unused-vars
import React from "react";

import { Description, Map, SliderMain } from "./components";
import "./styles.scss";

export default function Main() {
  document.body.style.background = "";

  return (
    <>
      <div className="main"></div>
      <SliderMain />
      <Description />
      <Map />
    </>
  );
}
