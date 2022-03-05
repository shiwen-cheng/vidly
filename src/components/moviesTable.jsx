import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class moviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (m) => (
        <Like onClick={() => this.props.onLike(m)} liked={m.liked} />
      ),
    },
    {
      key: "delete",
      content: (m) => (
        <button
          onClick={() => this.props.onDelete(m)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props; // 注意在class中是this.props

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default moviesTable;
