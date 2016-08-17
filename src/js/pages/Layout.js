import React from "react";
import { connect } from "react-redux";

import Nav from "../components/layout/Nav";

import { fetchMovies } from "../actions/discoveryActions";

@connect((store) => {
  return {
    movies: store.discovery.results
  };
})

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchMovies({sort_by: "popularity.desc"}));
  }
  render() {
    let mappedMovies = this.props.movies.map((movie, i) => {
      return <div key={i}>{movie.original_title}</div>;
    });

    return (
      <div>
        <Nav/>
        <div>
        {mappedMovies}
        </div>
      </div>
    );
  }
}
