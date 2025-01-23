// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { Search, SightItem, SightLoader, Pagination } from "./components";
import sightFetch from "../../api/fetchGet";
import "./styles.scss";

export default function Sight() {
  document.body.style.background = "";
  const { category, sortBy, order, title, page, limit } = useSelector(
    ({ queryParams }) => queryParams,
  );
  const url = new URL(
    "https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card",
  );
  const urlAll = new URL(
    "https://67266547302d03037e6d6bc0.mockapi.io/v1/sight-card",
  );

  url.searchParams.set("category", category);
  url.searchParams.set("sortBy", sortBy);
  url.searchParams.set("order", order);
  url.searchParams.set("title", title);
  url.searchParams.set("page", page);
  url.searchParams.set("limit", limit);
  urlAll.searchParams.set("category", category);
  urlAll.searchParams.set("title", title);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["sight", category, sortBy, order, title, page],
    queryFn: () => sightFetch(url),
  });

  const sightAll = useQuery({
    queryKey: ["sightAll", category, sortBy, order, title],
    queryFn: () => sightFetch(urlAll),
  });

  const lastPage = sightAll.data ? Math.ceil(sightAll.data.length / limit) : 1;
  console.log(lastPage);
  
  return (
    <>
      <Search />
      <section className="sight">
        <ul id="data_container" className="sight__items">
          {isLoading ? (
            Array(3)
              .fill(0)
              .map((_, index) => (
                <SightLoader key={index} className="sight__items-loader" />
              ))
          ) : isError ? (
            <SightItem
              id={null}
              title={"Ничего не найдено"}
              imageUrl={""}
              desc={"В соотвествии с вашим поисковым запросов ничего"}
            />
          ) : (
            data.map((obj) => (
              <SightItem
                key={obj.id}
                id={obj.id}
                title={obj.title}
                imageUrl={obj.images[0]}
                desc={obj.description}
              />
            ))
          )}
        </ul>
      </section>
      <Pagination lastPage={lastPage} />
    </>
  );
}
Sight.propTypes = {
  obj: PropTypes.object.isRequired,
};
