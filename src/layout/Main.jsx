import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    filter: "",
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  filterCheck = (filter) => {
    this.setState({ filter: filter });
  };

  movieSearch = (str) => {
    this.setState({ loading: true });
    const { filter } = this.state;
    if (filter === "All") {
      if (str === "") {
        return;
      } else {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}`)
          .then((response) => response.json())
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          );
      }
    } else if (filter === "Movies") {
      if (str === "") {
        return;
      } else {
        fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=movie&s=${str}`
        )
          .then((response) => response.json())
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          );
      }
    } else {
      if (str === "") {
        return;
      } else {
        fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=series&s=${str}`
        )
          .then((response) => response.json())
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          );
      }
    }
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search movieSearch={this.movieSearch} />
        <Filter filterCheck={this.filterCheck} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
export { Main };
