import React from "react";

import MovieItem from "./MovieItem";

export default class MovieList extends React.Component {
  render() {
    const { configuration, genres, movies } = this.props;
    const mappedMovies = movies.map((movie) => {
      return <MovieItem key={movie.id} movie={movie} configuration={configuration} genres={genres}/>;
    });
    return (
      <div class="movie-list">
        <div class="container">
          <div class="row">
            {mappedMovies}
          </div>
        </div>
      </div>
    );
  }
}
