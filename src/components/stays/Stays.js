import React from "react";
import StayItem from "./components/stay-item/StayItem";
import "./stays.scss";

const Stays = () => {
  return (
    <main>
      <div className="stay__header">
        <h2>Stays in Finland </h2>
        <span>12+ stays</span>
      </div>
      <div className="stay-list">
        <StayItem />
        <StayItem />
        <StayItem />
      </div>
    </main>
  );
};

export default Stays;
