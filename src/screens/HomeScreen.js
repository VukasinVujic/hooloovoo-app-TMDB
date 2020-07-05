import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";

import { observer } from "mobx-react-lite";

import { Movie } from "../components";
import { moviesApi } from "../api";
import { useStore } from "../store";

export const HomeScreen = observer(() => {
  const { moviesStore } = useStore();
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = () => {
    setIsFetching(true);

    moviesApi
      .fetchPopularMovies()
      .then((response) => {
        // console.log("Adding movies to store", response);
        moviesStore.addMovies(response.results);
        // console.log("Added movies");
      })
      .catch((error) => {
        console.log(`[ERROR] ${error}`);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Movie
        id={item.id}
        name={item.original_title}
        date={item.release_date}
        posterPath={item.poster_path}
        rating={item.vote_count}
      />
    );
  };

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.bigContainer}>
      {isFetching ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={64} />
        </View>
      ) : (
        <FlatList
          style={{
            height: "100%",
            width: "100%",
          }}
          contentContainerStyle={{
            justifyContent: "center",
          }}
          data={moviesStore.moviesList.slice(0, 10)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  bigContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
