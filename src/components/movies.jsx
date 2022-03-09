import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "./common/input";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [], // 实际从服务器中获取数据需要一点时间，在这期间内，避免这两个是 undefined，否则会出现运行错误
    genre: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    //   当所有组件渲染完成后调用
    const { data: genres } = await getGenres();
    const { data: movies } = await getMovies();

    this.setState({
      movies,
      genres: [{ _id: "", name: "All Genres" }, ...genres],
    });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies }); // this.setState({ movies: movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies });
    }
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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    // 对于受控组件不能用 null or undefined
  };

  handleSearch = (query) => {
    //   query is a string
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      selectedGenre,
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
    } = this.state;

    /* filter */
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    /* sort */
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    /* pagination  */
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      genres,
      selectedGenre,
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
    } = this.state;

    if (count === 0) return <p>there is no movie.</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p className="m-3">Showing {totalCount} movies in the database.</p>
          {/* TODO: search bar ,search by title 大小写不敏感 ，这里不用管分类 */}
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
