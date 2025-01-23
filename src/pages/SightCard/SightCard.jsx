import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import './styles.scss';
import sightFetch from '../../api/fetchGet';
import { Reviews, SightCardItem, SightCardLoader, Map } from './components';

const sightPathName = '/sight/';

export default function SightCard() {
  document.body.style.background = '';
  const location = useLocation();
  const sightId = location.pathname.replace(sightPathName, '');
  const url = new URL(`https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card/${sightId}`);
  const reviewsUrl = new URL(
    `https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card/${sightId}/reviews`,
  );

  const { data, isLoading } = useQuery({
    queryKey: ['sightcard', sightId],
    queryFn: () => sightFetch(url),
    retry: 2,
  });

  const { data: reviewsData, isError } = useQuery({
    queryKey: ['reviews', sightId],
    queryFn: () => sightFetch(reviewsUrl),
    retry: 0,
  });

  const [isOpenMap, setOpenMap] = React.useState(false);

  const handleToggleMap = () => {
    setOpenMap(!isOpenMap);
  };

  return (
    <>
      <section className="sight">
        <ul className="sight__items">
          <li className="sight__item">
            <div className="sight__wrap">
              <div className="sight__item-title">
                <p>{isLoading ? '' : data.title}</p>
              </div>
              <div className="sight__main-wrap">
                {isLoading ? (
                  <SightCardLoader />
                ) : (
                  <SightCardItem
                    description={data.description}
                    images={data.images}
                    title={data.title}
                  />
                )}
                <hr />
                <Reviews err={isError} reviews={reviewsData} />
              </div>
              <div className="sight__item-adress">
                <p>{isLoading ? '' : data.adress}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="mapCard">
        <div>
          <button onClick={handleToggleMap} className="mapCard__btn">
            Показать карту
          </button>
        </div>
        {isOpenMap && <Map map={data.map} handleToggleMap={handleToggleMap} />}
      </section>
    </>
  );
}
