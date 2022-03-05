import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class moviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props; // 注意在class中是this.props
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
  }
}

export default moviesTable;
