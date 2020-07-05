import { observable, action, decorate } from "mobx";

class MoviesStore {
  moviesList = [];

  addMovies = (newMovies) => {
    this.moviesList = this.moviesList.concat(newMovies);
  };
}

decorate(MoviesStore, {
  moviesList: observable,
  addMovies: action,
});

export default MoviesStore;
