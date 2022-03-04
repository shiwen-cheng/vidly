import React, { Component } from "react";
import Like from "./common/like";

const moviesTable = (props) => {
  const { movies, onLike, onDelete } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like onClick={() => onLike(m)} liked={m.liked} />
              {/* 写在使用组件这个位置的属性，是传参
                  写在构建组件位置的作用，才是发起事件 */}
            </td>
            <td>
              <button
                onClick={() => onDelete(m)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default moviesTable;
