import { observable, action, decorate } from "mobx";

class MoviesStore {
  moviesList = [];
  genreTag = [];

  addMovies = (newMovies) => {
    this.moviesList = [];
    this.moviesList = this.moviesList.concat(newMovies);
  };

  addGenreTag = (newGenreTag) => {
    this.genreTag = [];
    this.genreTag = this.genreTag.concat(newGenreTag);
  };
}

decorate(MoviesStore, {
  moviesList: observable,
  addMovies: action,
});

export default MoviesStore;
