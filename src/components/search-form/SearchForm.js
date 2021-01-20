import React, { useState } from "react";
import "./search-form.scss";
import { MdSearch } from "react-icons/md";
import SearchBox from "../search-box/SearchBox";
import { CSSTransition } from "react-transition-group";

const SearchForm = () => {
  const [showBox, setShowBox] = useState(false);
  const [focusElement, setFocusElement] = useState("");

  const toggleBox = (element) => {
    setShowBox(!showBox);
    setFocusElement(element);
  };

  return (
    <>
      <div className="search-form">
        <button
          className="search-form__location"
          onClick={() => toggleBox("location")}
        >
          Helsinki, Finland
        </button>
        <input
          className="search-form__input"
          placeholder="Add guests"
          onClick={() => toggleBox("guest")}
        />
        <button className="search-form__btn">
          <MdSearch size="1.5em" />
        </button>
      </div>
      <CSSTransition
        in={showBox}
        timeout={300}
        classNames="search"
        unmountOnExit
      >
        <SearchBox toggleBox={toggleBox} focus={focusElement} />
      </CSSTransition>
    </>
  );
};

export default SearchForm;
