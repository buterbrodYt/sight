import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Map({ map, handleToggleMap }) {
  const mapElement = React.useRef();

  React.useEffect(() => {
    const hideMap = (e) => {
      if (e.key === 'Escape') {
        handleToggleMap();
      } else if (e.target !== mapElement.current) {
        handleToggleMap();
      }
    };
    window.addEventListener('mousedown', hideMap);
    window.addEventListener('keydown', hideMap);
    return () => (
      // eslint-disable-next-line
      window.removeEventListener('mousedown', hideMap),// eslint-disable-next-line
      window.removeEventListener('keydown', hideMap)
    );
  }, [handleToggleMap]);
  return (
    <div className="mapCard__yandex-back">
      <div className="mapCard__yandex">
        <div ref={mapElement} className="mapCard__yandex-wrap">
          <iframe
            title="123"
            src={map}
            id="map"
            className="mapCard__yandex-iframe"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  );
}

Map.propTypes = {
  map: PropTypes.string.isRequired,
  handleToggleMap: PropTypes.func.isRequired,
};
