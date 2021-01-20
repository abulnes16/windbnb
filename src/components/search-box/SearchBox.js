import React from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import "./search-box.scss";

const SearchBox = ({ toggleBox, focus }) => {
  return (
    <div className="search-box">
      <div className="search-box__header">
        <p>Edit your search</p>
        <span className="close-btn" onClick={toggleBox}>
          &times;
        </span>
      </div>
      <div className="search-box__form">
        <div className="search-box__input">
          <label>Location</label>
          <input
            defaultValue="Helsinki, Finland"
            autoFocus={focus === "location"}
          />
        </div>
        <hr />
        <div className="search-box__input">
          <label>Guests</label>
          <input placeholder="Add guests" autoFocus={focus === "guest"} />
        </div>
      </div>

      <ul className="search-box__locations">
        <li>
          <MdLocationOn className="icon" />
          Helsinki, Finland
        </li>
        <li>
          <MdLocationOn className="icon" />
          Helsinki, Finland
        </li>
        <li>
          <MdLocationOn className="icon" />
          Helsinki, Finland
        </li>
        <li>
          <MdLocationOn className="icon" />
          Helsinki, Finland
        </li>
      </ul>

      <button className="search-box__btn">
        <MdSearch className="icon" />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
