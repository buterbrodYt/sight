// eslint-disable-next-line no-unused-vars
import React from "react";
import ContentLoader from "react-content-loader";

export default function SightLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={"30%"}
      viewBox="0 0 500 600"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="5%" y="15.5%" rx="15" ry="15" width="90%" height="72%" />
      <rect x="5%" y="90%" rx="15" ry="15" width="90%" height="10%" />
      <rect x="5%" y="10" rx="15" ry="15" width="90%" height="7%" />
    </ContentLoader>
  );
}
