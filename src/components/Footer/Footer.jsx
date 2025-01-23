import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/img/logo_wh.svg";
import TG from "../../assets/img/TG.svg";
import VK from "../../assets/img/VK.svg";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__logo">
          <Link to="/" className="footer__logo">
            <img src={FooterLogo} alt="logo" className="footer__logo-pic" />
            <div className="footer__logo-block">
              <p className="footer__logo-title">Городской Навигатор</p>
              <p className="footer__logo-subtitle">
                ©2024 Городской Навигатор
              </p>
            </div>
          </Link>
        </div>
        <div className="footer__contact">
          <Link to="/contact" className="footer__contact-link">
            <p className="footer__contact-title">Контакты</p>
          </Link>
          <div className="footer__contact-wrap">
            <div className="footer__contact-block">
              <a
                href="https://t.me/butterbrodyt"
                className="footer__contact-link"
              >
                <img src={TG} alt="telegram" className="footer__contact-pic" />
                <p className="footer__contact-text">Telegram</p>
              </a>
            </div>
            <div className="footer__contact-block">
              <a
                href="https://vk.com/mc_max1939"
                className="footer__contact-link"
              >
                <img src={VK} alt="Vkontakte" className="footer__contact-pic" />
                <p className="footer__contact-text">Vkontakte</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__politics">
          <Link to="/" className="footer__politics-link">
            <p className="footer__politics-text">Политика Конфиденциальности</p>
          </Link>
          <Link to="/" className="footer__politics-link">
            <p className="footer__politics-text">Правила и Условия</p>
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text">Site by BTT</p>
      </div>
    </footer>
  );
}
