import React, { useEffect } from "react";
// import axios from "axios";

export const MoviesStore = (props) => {
  const fetchList = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a7591b103e58fc4674393468dd6a570b&language=en-US&page=1"
    );
    console.log(response);
  };

  useEffect(() => {
    fetchList(), [];
  });
};

export default MoviesStore;
