import React, { useState } from "react";
import "./search-form.scss";
import { MdSearch } from "react-icons/md";
import SearchBox from "../search-box/SearchBox";
const SearchForm = () => {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => setShowBox(!showBox);

  if (showBox) {
    return <SearchBox toggleBox={toggleBox} />;
  }

  return (
    <div className="search-form">
      <button className="search-form__location" onClick={toggleBox}>
        Helsinki, Finland
      </button>
      <input
        className="search-form__input"
        placeholder="Add guests"
        onClick={toggleBox}
      />
      <button className="search-form__btn">
        <MdSearch size="1.5em" />
      </button>
    </div>
  );
};

export default SearchForm;
