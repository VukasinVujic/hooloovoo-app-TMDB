import React, { useRef, useEffect, useState } from "react";
import { View, Text, Dimensions, FlatList, Image } from "react-native";

import { observer } from "mobx-react-lite";

import { useStore } from "../store";
import { styles } from "../components/Movie/Movie.style";
import { moviesApi } from "../api";

const MovieDetailScreen = observer(({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const { moviesStore } = useStore();
  const { movieId } = route.params;
  const currentMovieIdx = moviesStore.moviesList.findIndex(
    (movie) => movie.id === movieId
  );
  const flatListRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchGenreTagline = (movieId) => {
    setIsFetching(true);

    console.log(`Movie Store ${JSON.stringify(moviesStore.moviesList)}`);

    moviesApi
      .fetchGenTag(movieId)
      .then((response) => {
        // console.log("Adding details to the store", response);
        moviesStore.addGenreTag(response.genres);
      })
      .catch((error) => {
        console.log(`[ERROR] ${error}`);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: currentMovieIdx,
    });
    fetchGenreTagline(movieId);
  }, []);

  const renderMovie = ({ item }) => {
    {
      // console.log(item.id);
    }
    return (
      <View
        style={{
          flex: 1,
          width: screenWidth,
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#003148",
          color: "#ffffff",
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: "white", fontSize: 20 }}>
            {item.original_title}
            {`(${item.release_date.slice(0, 4)})`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text>{`${item.vote_average * 10}%`}</Text>
            </View>
          </View>
          <View style={{ flex: 0.1 }} />
          <Text style={{ color: "white", fontSize: 20 }}>Users{"\n"}Grade</Text>
          <View style={{ flex: 0.1 }} />
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={require("../../public/pictures/list2.png")}
          />
          <View style={{ flex: 0.1 }} />

          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={require("../../public/pictures/like2.png")}
          />
          <View style={{ flex: 0.1 }} />
        </View>
        <Text style={{ color: "white", fontSize: 15 }}>Description</Text>

        <View style={{ marginVertical: 15, marginHorizontal: 15 }}>
          <Text style={{ color: "white" }}>{item.overview}</Text>
        </View>
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
