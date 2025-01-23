import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import './styles.scss';
import fetchPost from '../../../../../../api/fetchPost';

export default function ModalReviews({ handleCloseReviews }) {
  const nameInput = React.useRef();
  const ratingInput = React.useRef();
  const descInput = React.useRef();
  const modalBack = React.useRef();
  const location = useLocation();
  const sightPathName = '/sight/';
  const sightId = location.pathname.replace(sightPathName, '');
  const url = `https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card/${sightId}/reviews`;

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (obj) => {
      fetchPost(url, obj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', sightId]);
      handleCloseReviews();
    },
    onError: (error) => {
      alert('Ошибка при добавлении отзыва: ' + error.message);
    },
    retry: 2,
  });

  React.useEffect(() => {
    const closeModal = (e) => {
      if (e.key === 'Escape') {
        return handleCloseReviews();
      }
      if (e.target === modalBack.current) {
        return handleCloseReviews();
      }
    };
    window.addEventListener('mousedown', closeModal);
    window.addEventListener('keydown', closeModal);
    return () => (
      // eslint-disable-next-line no-unused-vars
      window.removeEventListener('keydown', closeModal),
      window.removeEventListener('mousedown', closeModal)
    );
  }, [handleCloseReviews]);

  const handleSubmitReview = () => {
    if (!nameInput.current.value) {
      alert('Введите имя');
      return;
    }
    if (!descInput.current.value) {
      alert('Введите описание');
      return;
    }
    if (!(1 <= ratingInput.current.value) || !(5 >= ratingInput.current.value)) {
      alert('Рейтинг строго от 1 до 5');
      return;
    }
    const newReview = {
      name: nameInput.current.value,
      rating: parseInt(ratingInput.current.value),
      description: descInput.current.value,
      'sight-cardId': sightId,
    };

    createMutation.mutate(newReview);
  };
  return (
    <div ref={modalBack} className={'sight__reviews-modal-back flex'}>
      <div className="sight__reviews-modal">
        <h1>Оставьте отзыв</h1>
        <span onClick={handleCloseReviews} className="close">
          &times;
        </span>
        <input
          ref={nameInput}
          className="sight__reviews-modal-input"
          type="text"
          placeholder="Введите имя"
          required
        />
        <input
          ref={ratingInput}
          className="sight__reviews-modal-input"
          type="number"
          placeholder="Введите рейтинг (от 1 до 5)"
          required
          min="1"
          max="5"
        />
        <textarea
          ref={descInput}
          className="sight__reviews-modal-textarea"
          placeholder="Введите описание"
          required
        ></textarea>
        <button className="sight__reviews-modal-sumbit" type="submit" onClick={handleSubmitReview}>
          Отправить
        </button>
      </div>
    </div>
  );
}

ModalReviews.propTypes = {
  handleCloseReviews: PropTypes.func.isRequired,
};
