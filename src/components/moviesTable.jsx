import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";
import auth from "./../services/authService";
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
  ];

  deleteColumn = {
    key: "delete",
    content: (m) => (
      <button
        onClick={() => this.props.onDelete(m)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurUser();

    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

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
