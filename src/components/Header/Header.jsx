import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../../assets/img/logo_wh.svg";
import "./styles.scss";

export default function Header() {
  const [isOpenBurger, setOpenBurger] = React.useState(false);

  const handleOpenBurger = () => {
    setOpenBurger(!isOpenBurger);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <img src={HeaderLogo} alt="logo" className="header__logo-pic" />
          <Link to="/" className="header__logo-link">
            <p className="header__logo-text">Городской навигатор</p>
          </Link>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link to="/contact" className="header__link">
                Контакты
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to="/sight" className="header__link">
                Достопримечательности
              </Link>
            </li>
          </ul>
        </nav>
        <div className="burger__menu">
          <div
            onClick={handleOpenBurger}
            className={`burger__icon ${isOpenBurger ? "open" : ""}`}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`burger__menu-items ${isOpenBurger ? "open" : ""}`}>
            <Link to="/contact" onClick={handleOpenBurger}>
              Контакты
            </Link>
            <Link to="/sight" onClick={handleOpenBurger}>
              Достопримечательности
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
