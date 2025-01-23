import React from "react";
import ContentLoader from "react-content-loader";

import "./styles.scss";

export default function SightCardLoader() {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      viewBox="0 0 1600 900"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      className="sight__loader"
    >
      <rect
        x="0"
        y="0"
        rx="15"
        ry="15"
        width="20%"
        height="100%"
        className="sight__loader-text"
      />
      <rect
        x="25%"
        y="0"
        rx="15"
        ry="15"
        width="90%"
        height="100%"
        className="sight__loader-pic"
      />
    </ContentLoader>
  );
}
