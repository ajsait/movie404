import React from "react";
import { connect } from "react-redux";

import Movie from "../components/Movie";
import Nav from "../components/layout/Nav";

import { fetchMovies } from "../actions/discoveryActions";

@connect((store) => {
  return {
    movies: store.discovery.results
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMovies({sort_by: "popularity.desc"}));
  }

  render() {
    let mappedMovies = this.props.movies.map((movie) => {
      return <Movie key={movie.id} movie={movie}/>;
    });

    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav/>
        <div class="container" style={containerStyle}>
          <div class="row">
            {mappedMovies}
          </div>
        </div>
      </div>
    );
  }
}
