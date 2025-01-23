import React from "react";

import "./styles.scss";

export default function MapMain() {
  return (
    <section className="map">
      <div className="map__wrap">
        <div className="map__top">
          <p className="map__title title">Набережные Челны на карте</p>
        </div>
        <div className="map__yandex">
          <div className="map__yandex-int">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=52.366194%2C55.712530&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTA5MxJr0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQotCw0YLQsNGA0YHRgtCw0L0gKNCi0LDRgtCw0YDRgdGC0LDQvSksINCd0LDQsdC10YDQtdC20L3Ri9C1INCn0LXQu9C90YsiCg1anVFCFRD3XkI%2C&z=11.75"
              allowFullScreen={true}
              className="map__yandex-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
