import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import "./styles.scss";
import { setCategory, setOrder, setSortBy } from "../../../../../redux/actions";

export default function Filter({ handleOpenFilter }) {
  const category = React.useRef();
  const sortBy = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const pressEscape = (e) => {
      if (e.key == "Escape") {
        handleOpenFilter();
      }
    };
    window.addEventListener("keydown", pressEscape);
    return () => window.removeEventListener("keydown", pressEscape);
  }, [handleOpenFilter]);

  const handleChangeCategory = () => {
    dispatch(setCategory(category.current.value));
  };

  const handleChangeCSortBy = () => {
    if (sortBy.current.value[0] === "!") {
      const sort = sortBy.current.value.slice(1);
      dispatch(setSortBy(sort));
      dispatch(setOrder("desc"));
      return false;
    }
    dispatch(setOrder("asc"));
    dispatch(setSortBy(sortBy.current.value));
  };

  return (
    <div className="search__menu open">
      <select
        onChange={handleChangeCategory}
        ref={category}
        name="category"
        className="search__menu-select"
      >
        <option value="" className="search__filter-opt">
          Все категории
        </option>
        <option value="natural" className="search__filter-opt">
          Природные объекты
        </option>
        <option value="cultural" className="search__filter-opt">
          Культурные объекты
        </option>
        <option value="historical" className="search__filter-opt">
          Исторические объекты
        </option>
        <option value="religious" className="search__filter-opt">
          Религиозные объекты
        </option>
      </select>
      <select
        onChange={handleChangeCSortBy}
        ref={sortBy}
        name="sorting"
        className="search__menu-select"
      >
        <option value="" className="search__filter-opt">
          Сортировать по...
        </option>
        <option value="title" className="search__filter-opt">
          А-я
        </option>
        <option value="!title" className="search__filter-opt">
          Я-а
        </option>
        <option value="popularity" className="search__filter-opt">
          Сначала популярные
        </option>
        <option value="!popularity" className="search__filter-opt">
          Сначала непопулярные
        </option>
        <option value="year" className="search__filter-opt">
          Сначала старые
        </option>
        <option value="!year" className="search__filter-opt">
          Сначала новые
        </option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  handleOpenFilter: PropTypes.func.isRequired,
};
