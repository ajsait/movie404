import React from "react";

export default class Movie extends React.Component {
  render() {
    const movie = this.props.movie;

    return (
      <div class="col-md-4">
        <h4>{movie.original_title}</h4>
        <p>{movie.overview}</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
