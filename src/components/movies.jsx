import React, { Component } from "react"; // imrc
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/list_group";

class Movies extends React.Component {
  // cc
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentGenre: "All Genres",
    currentPage: 1,
    pageSize: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies }); // this.setState({ movies: movies });
  };

  handleLike = (m) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(m);
    // movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelect = () => {
    console.log("select");
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      genres,
      currentGenre,
      pageSize,
      currentPage,
    } = this.state;

    if (count === 0) return <p>there is no movie.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={genres}
              currentGenre={currentGenre}
              onSelect={this.handleSelect}
            />
          </div>
          <div className="col">
            <p>showing {count} movies in the database.</p>
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
                      <Like
                        onClick={() => this.handleLike(m)}
                        liked={m.liked}
                      />
                      {/* 写在使用组件这个位置的属性，是传参
                  写在构建组件位置的作用，才是发起事件 */}
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(m)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
