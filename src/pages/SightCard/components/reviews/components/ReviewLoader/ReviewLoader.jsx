// eslint-disable-next-line no-unused-vars
import React from "react";
import ContentLoader from "react-content-loader";

export default function ReviewLoader() {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      viewBox="0 0 1600 900"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="92" ry="92" width="100%" height="20%" />
    </ContentLoader>
  );
}
