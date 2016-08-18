import React from "react";
import { connect } from "react-redux";

import axios from "axios";

import MovieList from "../components/MovieList";
import Nav from "../components/layout/Nav";

import { fetchMovies } from "../actions/discoverActions";
import { fetchConfiguration } from "../actions/configurationActions";
import { fetchMovieGenres } from "../actions/genreActions";

@connect((state) => {
  return {
    movies: state.discover.results,
    configuration: state.configuration.configuration,
    genres: state.genres.genres,
    moviesError: state.discover.error,
    configurationError: state.configuration.error,
    genresError: state.genres.error
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(this.fetchConfigurationAndMoviesAndGenres());
  }

  fetchConfigurationAndMoviesAndGenres() {
    return dispatch => axios.all([
      dispatch(fetchConfiguration()),
      dispatch(fetchMovieGenres()),
      dispatch(fetchMovies({
        "sort_by" : "popularity.desc"}))
    ]);
  }

  hasError() {
    const { moviesError, configurationError, genresError } = this.props;
    return moviesError !== null || configurationError !== null || genresError !== null;
  }

  createMovieList() {
    const { configuration, genres, movies } = this.props;
    if (this.hasError()) {
      return <div>ERROR!</div>;
    } else {
      return <MovieList movies={movies} configuration={configuration} genres={genres}/>;;
    }
  }

  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav/>
        <div style={containerStyle}>
          {this.createMovieList()}
        </div>
      </div>
    );
  }
}
