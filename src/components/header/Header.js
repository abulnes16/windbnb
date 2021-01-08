import React from "react";
import SearchForm from "../search-form/SearchForm";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <figure className="logo-container">
        <img className="logo" src="assets/img/logo.svg" alt="Windbnb logo" />
      </figure>
      <SearchForm />
    </header>
  );
};

export default Header;
