import React from "react";
import "./search-Box.styles.css";
export const SearchBox = ({ placeholder, eventHandler }) => (
  <div>
    <input type="search" placeholder={placeholder} onChange={eventHandler} />
  </div>
);
