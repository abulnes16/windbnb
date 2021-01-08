import React from "react";
import { MdStar } from "react-icons/md";
import "./stay-item.scss";

const StaysItem = () => {
  return (
    <div className="stay">
      <figure className="stay__image-container">
        <img
          src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
          alt="Stay preview"
        />
      </figure>
      <div className="stay__info">
        <span className="stay__badge">Super host</span>
        <span className="stay__type">Entire apartment.</span>
        <span className="stay__beds">2 beds</span>
        <span className="stay__rating">
          <MdStar className="star" />
          4.40
        </span>
      </div>
      <div className="stay__title">Stylish apartment in center of the city</div>
    </div>
  );
};

export default StaysItem;
