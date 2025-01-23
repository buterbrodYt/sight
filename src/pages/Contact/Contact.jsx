import React from "react";

import "./styles.scss";
import ContactBackgroud from "../../assets/img/bg_contact.png";
import TG from "../../assets/img/TG_black.svg";
import VK from "../../assets/img/VK_black.svg";

import Modal from "./components/ContactModal";

export default function Contact() {
  document.body.style.background = `url(${ContactBackgroud}) no-repeat center center / cover`;
  const [isOpenModal, setOpenModal] = React.useState(false);
  const handleClickModal = () => {
    setOpenModal(!isOpenModal);
  };
  return (
    <>
      <section className="contact">
        <div className="contact__wrap">
          <div className="contact__social">
            <p className="contact__social-title">Мы в соц. сетях</p>
            <div className="contact__social-icons">
              <a href="https://t.me/butterbrodyt">
                <img src={TG} alt="Telegram" />
              </a>
              <a href="https://vk.com/mc_max1939">
                <img src={VK} alt="Vkontakte" />
              </a>
            </div>
            <p className="contact__social-title">Почта</p>
            <p className="contact__social-text">gagfajhhjhd@mail.ru</p>
            <p className="contact__social-title">Телефон</p>
            <p className="contact__social-text">+7(999)-999-99-99</p>
          </div>
          <button onClick={handleClickModal} className="contact__btn">
            Связаться c нами
          </button>
          {isOpenModal && <Modal handleClickModal={handleClickModal} />}
        </div>
      </section>
    </>
  );
}
