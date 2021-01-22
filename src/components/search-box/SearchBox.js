import React, { useState } from "react";
import { MdAdd, MdLocationOn, MdRemove, MdSearch } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import "./search-box.scss";

const SearchBox = ({ toggleBox, focus }) => {
  const [showOptions, setShowOptions] = useState(focus);

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
            onFocus={() => setShowOptions("location")}
          />
        </div>
        <hr />
        <div className="search-box__input">
          <label>Guests</label>
          <input
            placeholder="Add guests"
            autoFocus={focus === "guest"}
            onFocus={() => setShowOptions("guest")}
          />
        </div>
      </div>
      <div className="d-flex">
        <CSSTransition
          in={showOptions === "location"}
          timeout={350}
          classNames="location-list"
          unmountOnExit
        >
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
        </CSSTransition>
        <CSSTransition
          in={showOptions !== "location"}
          timeout={350}
          classNames="location-list"
          unmountOnExit
        >
          <div className="counter-container">
            <div className="guest-counter">
              <div>
                <p className="guest-counter__type">Adults</p>
                <p>Ages 13 or above</p>
              </div>
              <div className="counter">
                <button className="guest-counter__btn">
                  <MdAdd />
                </button>
                <span>10 </span>
                <button className="guest-counter__btn">
                  <MdRemove />
                </button>
              </div>
            </div>

            <div className="guest-counter">
              <div>
                <p className="guest-counter__type">Children</p>
                <p>Ages 2-12</p>
              </div>
              <div className="counter">
                <button className="guest-counter__btn">
                  <MdAdd />
                </button>
                <span>10 </span>
                <button className="guest-counter__btn">
                  <MdRemove />
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <button className="search-box__btn">
        <MdSearch className="icon" />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
