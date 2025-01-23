// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SightItem({ id, imageUrl, title, desc }) {
  return (
    <li className="sight__items-item" data-category="">
      <Link to={`/sight/${id}`} className="sight__items-link">
        <div className="sight__items-card">
          <h2 className="sight__items-card-title">{title}</h2>
          <div className="sight__items-card-block">
            <img
              src={imageUrl}
              alt={title}
              className="sight__items-card-pic"
            />
            <div className="sight__items-card-back">
              <p className="sight__items-card-text">{desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

SightItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
