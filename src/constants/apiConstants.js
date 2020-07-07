export const API = {
  BASE_URL: "https://api.themoviedb.org",
  API_BASE_URL: "https://api.themoviedb.org/3",
  POSTER_BASE: "https://image.tmdb.org/t/p/w185",
  MOVIES: {
    TOP: "/movie/popular?api_key={APIKEY}&language=en-US&page=1",
    DETAIL:
      "/movie/{MOVIEID}?api_key=a7591b103e58fc4674393468dd6a570b&language=en-US",
  },
};
