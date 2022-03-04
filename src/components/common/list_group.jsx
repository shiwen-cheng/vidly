import React, { Component } from "react";
import { genres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const { onSelect, currentGenre } = props;
  const genres = [{ _id: "0", name: "All Genres" }, , ...props.genres];

  console.log(currentGenre);

  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          key={g._id}
          onClick={() => onSelect(g.name)}
          className={
            g.name === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
