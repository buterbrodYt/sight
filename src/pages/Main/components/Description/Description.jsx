import React from "react";

import micro_bg1 from "../../../../assets/img/micro_bg1.png";
import micro_bg2 from "../../../../assets/img/micro_bg2.png";
import micro_bg3 from "../../../../assets/img/micro_bg3.png";
import "./styles.scss";

export default function Description() {
  return (
    <section className="description">
      <div className="description__wrap">
        <h2 className="description__title title">Описание города</h2>
        <div className="discription__blocks">
          <div className="description__row">
            <div className="discription__block description__block-tx">
              <p className="description__block-text">
                В Набережных Челнах жилые массивы города и его деловые районы
                отделены друг от друга парками и широкими проспектами, которые
                украшают зелёные аллеи и клумбы.
              </p>
            </div>
            <div className="discription__block description__block-pic">
              <img
                src={micro_bg1}
                alt="city"
                className="description__block-pic"
              />
            </div>
            <div className="discription__block description__block-tx">
              <p className="description__block-text">
                Микрорайоны называются комплексами. Такая традиция возникла
                благодаря быстрому расширению территории Челнов: микрорайоны
                строились в 70-е годы одновременно.
              </p>
            </div>
          </div>
          <div className="description__row">
            <div className="discription__block description__block-pic">
              <img
                src={micro_bg2}
                alt="church"
                className="description__block-pic"
              />
            </div>
            <div className="discription__block description__block-tx">
              <p className="description__block-text">
                Город окружён зелёными зонами: с одной стороны Боровецкий лес, а
                если переехать по мосту через Каму, можно попасть в национальный
                парк «Нижняя Кама».
              </p>
            </div>
            <div className="discription__block description__block-pic">
              <img
                src={micro_bg3}
                alt="monument"
                className="description__block-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
