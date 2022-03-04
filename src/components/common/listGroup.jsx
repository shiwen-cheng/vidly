import React, { Component } from "react";
import { genres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const { textProperty, valueProperty, onSelect, currentGenre } = props;
  const items = [{ _id: "0", name: "All Genres" }, , ...props.items];

  console.log(currentGenre);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onSelect(item[textProperty])}
          className={
            item[textProperty] === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = { textProperty: "name", valueProperty: "_id" };

export default ListGroup;
