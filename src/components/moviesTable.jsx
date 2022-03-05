import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";
import MovieForm from "./movieForm";
class moviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (m) => <Link to={`/movies/${m._id}`}>{m.title}</Link>,
    },
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
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default moviesTable;
