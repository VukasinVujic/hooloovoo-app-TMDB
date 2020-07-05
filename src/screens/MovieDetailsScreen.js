import React, { useRef, useEffect } from "react";
import { View, Text, Dimensions, ScrollView, FlatList } from "react-native";

import { observer } from "mobx-react-lite";

import { useStore } from "../store";

const MovieDetailScreen = observer(({ route, navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const { moviesStore } = useStore();
  const { movieId } = route.params;
  const currentMovieIdx = moviesStore.moviesList.findIndex(
    (movie) => movie.id === movieId
  );

  const flatListRef = useRef(null);

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: currentMovieIdx,
    });
  }, []);

  const renderMovie = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{item.original_title}</Text>
        <Text>{item.vote_count}</Text>
      </View>
    );
  };

  const keyExtractor = (item, index) => `${item.id}-${index}`;

  const getItemLayout = (_data, index) => {
    const length = screenWidth;
    const offset = screenWidth * index;
    return { length, offset, index };
  };

  return (
    <FlatList
      horizontal
      pagingEnabled
      ref={flatListRef}
      data={moviesStore.moviesList.slice(0, 10)}
      renderItem={renderMovie}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  );
});

export default MovieDetailScreen;
