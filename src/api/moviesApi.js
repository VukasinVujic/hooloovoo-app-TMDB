import { API } from "../constants/apiConstants";

const apiKey = "a7591b103e58fc4674393468dd6a570b";

export const fetchPopularMovies = async () => {
  try {
    const path = `${API.API_BASE_URL}${API.MOVIES.TOP}`.replace(
      "{APIKEY}",
      apiKey
    );
    const response = await fetch(path);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log(`[ERROR] ${error}`);
  }
};

export const fetchGenTag = async (movieId) => {
  try {
    const path = `${API.API_BASE_URL}${API.MOVIES.DETAIL}`.replace(
      "{MOVIEID}",
      movieId
    );
    const response = await fetch(path);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log(`[ERROR] ${error}`);
  }
};
