// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import './styles.scss';
import can from '../../../../../../assets/img/can.svg';
import fetchDelete from '../../../../../../api/fetchDelete';

const sightPathName = '/sight/';

export default function Review({ name, rating, description, id }) {
  const location = useLocation();
  const sightId = location.pathname.replace(sightPathName, '');

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () =>
      fetchDelete(
        `https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card/${sightId}/reviews/${id}`,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', sightId]);
    },
    onError: (error) => {
      alert('Ошибка при удалении отзыва: ' + error.message);
    },
  });

  const handleDeleteReview = () => {
    const isConfirmed = window.confirm('Вы точно хотите удалить отзыв?');
    if (isConfirmed) {
      deleteMutation.mutate();
    }
  };
  return (
    <div className="sight__reviews-review">
      <div className="sight__reviews-review-block">
        <p className="sight__reviews-review-name">{name}</p>
        <p className="sight__reviews-review-rating">{'★ '.repeat(rating)}</p>
        <i className="sight__reviews-review-can" onClick={handleDeleteReview}>
          <img src={can} alt="can" />
        </i>
      </div>
      <p className="sight__reviews-review-description">{description}</p>
    </div>
  );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
