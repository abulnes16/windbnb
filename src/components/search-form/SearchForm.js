import React from "react";
import "./search-form.scss";
import { MdSearch } from "react-icons/md";
const SearchForm = () => {
  return (
    <div className="search-form">
      <button className="search-form__location">Helsinki, Finland</button>
      <input className="search-form__input" placeholder="Add guests" />
      <button className="search-form__btn">
        <MdSearch size="1.5em" />
      </button>
    </div>
  );
};

export default SearchForm;
