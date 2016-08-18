import React from "react";
import _ from "lodash";

export default class MovieItem extends React.Component {
  render() {
    const { movie, configuration, genres} = this.props;
    const { secure_base_url, backdrop_sizes } = configuration.images;
    const imageUrl = `${secure_base_url}${backdrop_sizes[backdrop_sizes.length - 3]}${movie.backdrop_path}`;

    const movieStyle = {
      backgroundImage: `url('${imageUrl}')`
    };

    const mappedGenres = movie.genre_ids.map((genreId) => {
      const genre = _.find(genres, {"id": genreId});
      return <span key={genre.id} class="label">{genre.name}</span>;
    });

    return (
      <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-6 col-md-offset-0 col-centered">
        <a href="" style={movieStyle} class="movie-item">
            <div class="overlay"/>
            <div class="text-wrap">
                <div class="name">{movie.original_title}</div>
                <div class="genres">
                  {mappedGenres}
                </div>
            </div>
        </a>
      </div>
    );
  }
}
