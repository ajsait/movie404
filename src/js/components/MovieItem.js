import React from "react";
import _ from "lodash";

export default class MovieItem extends React.Component {
  render() {
    const { movie, configuration, genres} = this.props;
    const { genre_ids, id, original_title, poster_path, release_date} = movie;
    const { secure_base_url, poster_sizes } = configuration.images;

    const imageUrl = `${secure_base_url}${poster_sizes[poster_sizes.length - 3]}${poster_path}`;

    const releaseYear = release_date.substring(0,4);

    const movieGenreList = genre_ids.map((genreId) => {
      const genre = _.find(genres, {"id": genreId});
      return genre.name;
    });
    const movieGenres = _.join(movieGenreList, ", ");

    return (
      <div class="uk-width-1-2 uk-width-small-1-3 uk-width-medium-1-4 uk-width-large-1-5 movie-item">
        <a class="uk-thumbnail" href={`/movie/${id}`}>
          <img src={imageUrl} alt=""/>
          <div class="uk-thumbnail-caption uk-hidden-small">
            <span class="uk-h5">{original_title}</span>
            <p class="uk-text-small">
              <i class="fa fa-calendar" aria-hidden="true"/>
              &nbsp;&nbsp;
              {releaseYear}
            </p>
            <p class="uk-text-small">
              <em class="uk-text-muted">{movieGenres}</em>
            </p>
          </div>
        </a>
      </div>
    );
  }
}
