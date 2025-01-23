import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export default function Modal({ handleClickModal }) {
  React.useEffect(() => {
    const pressEscape = (e) => {
      if (e.key === "Escape") {
        handleClickModal();
      }
    };
    window.addEventListener("keydown", pressEscape);
    return () => window.removeEventListener("keydown", pressEscape);
  }, [handleClickModal]);
  return (
    <div className="modal open">
      <div className="modal__wrap">
        <div className="modal__content">
          <span className="close" onClick={handleClickModal}>
            &times;
          </span>
          <h2>Введите данные</h2>
          <form className="modal__form" method="post">
            <label>Имя:</label>
            <input type="text" id="name" name="name" required />
            <label>Телефон:</label>
            <input type="number" id="phone" name="phone" required />
            <label>Сообщение:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" onClick={handleClickModal}>
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
};
