import React from "react";
import { useDispatch } from "react-redux";

import "./styles.scss";
import Filter from "./components/Filter";
import { setSearch } from "../../../../redux/actions";

export default function Search() {
  const dispatch = useDispatch();
  const search = React.useRef();
  const [isOpenFilter, setOpenFilter] = React.useState();

  const handleOpenFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedSetSearch = React.useMemo(
    () =>
      debounce((value) => {
        dispatch(setSearch(value));
      }, 1000),
    [dispatch],
  );

  const handleInputSearch = (e) => {
    debouncedSetSearch(search.current.value);
    if (e.key === "Enter") {
      dispatch(setSearch(search.current.value));
    }
  };

  return (
    <section className="search">
      <div className="search__wrap">
        <button onClick={handleOpenFilter} className="search__filter" />
        <div className="search__block">
          <input
            ref={search}
            onKeyDown={handleInputSearch}
            type="text"
            id="search__input"
            className="search__block-input"
            placeholder="Поиск"
          />
        </div>
        {isOpenFilter && <Filter handleOpenFilter={handleOpenFilter} />}
      </div>
    </section>
  );
}
