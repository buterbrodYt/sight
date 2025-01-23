import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import { ModalReviews, Review, ReviewLoader } from "./components";

export default function Reviews({ reviews, err }) {
  const [isOpenReviews, setOpenReviews] = React.useState(false);

  const handleOpenReviews = () => {
    setOpenReviews(!isOpenReviews);
  };

  const handleCloseReviews = () => {
    setOpenReviews(!isOpenReviews);
  };

  return (
    <div className="sight__reviews">
      <p className="sight__reviews-title">Отзывы</p>
      <button onClick={handleOpenReviews} className="sight__reviews-modal-btn">
        +
      </button>
      {isOpenReviews && (
        <ModalReviews
          handleCloseReviews={handleCloseReviews}
        />
      )}
      <div className="sight__reviews-data">
        {err ? undefined : !reviews ? (
          <ReviewLoader />
        ) : (
          reviews.map((review) => (
            <Review
              key={review.id}
              id={review.id}
              name={review.name}
              rating={review.rating}
              description={review.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.object,
  err: PropTypes.bool.isRequired,
};
