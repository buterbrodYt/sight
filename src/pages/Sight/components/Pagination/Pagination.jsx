import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';
import leftArrow from '../../../../assets/img/Chevrons_double_left.svg';
import rightArrow from '../../../../assets/img/Chevrons_double_right.svg';
import { setPage } from '../../../../redux/actions';

export default function Pagination({ lastPage }) {
  const dispatch = useDispatch();
  const { page } = useSelector(({ queryParams }) => queryParams);

  const turningPage = (value) => {
    dispatch(setPage(value));
  };

  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => turningPage(1)}
        className="pagination__first pagination__extreme"
      >
        <img src={leftArrow} alt="double_left" />
      </button>
      <button
        onClick={() => turningPage(page - 1)}
        className={classNames('pagination__text', page === 1 ? 'disable' : '')}
      >
        {page - 1}
      </button>
      <span className="pagination__text pagination__text-main">{page}</span>
      <button
        onClick={() => turningPage(page + 1)}
        className={classNames('pagination__text', page === lastPage ? 'disable' : '')}
      >
        {page + 1}
      </button>
      <button
        disabled={page === lastPage}
        onClick={() => turningPage(lastPage)}
        className="pagination__last pagination__extreme"
      >
        <img src={rightArrow} alt="right" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  lastPage: PropTypes.number.isRequired,
};
