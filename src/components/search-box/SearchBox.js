import React from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import "./search-box.scss";

const SearchBox = ({ toggleBox }) => {
  return (
    <div className="search-box">
      <div className="search-box__header">
        <p>Edit your search</p>
        <span onClick={toggleBox}>&times;</span>
      </div>
      <div className="search-box__form">
        <div className="search-box__input">
          <label>Location</label>
          <input value="Helsinki, Finland" />
        </div>
        <hr />
        <div className="search-box__input">
          <label>Guests</label>
          <input placeholder="Add guests" />
        </div>
      </div>
      <div className="search-box__locations">
        <ul>
          <li>
            <MdLocationOn />
            Helsinki, Finland
          </li>
          <li>
            <MdLocationOn />
            Helsinki, Finland
          </li>
          <li>
            <MdLocationOn />
            Helsinki, Finland
          </li>
          <li>
            <MdLocationOn />
            Helsinki, Finland
          </li>
        </ul>
      </div>
      <button className="search-box__btn">
        <MdSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
