import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SCREENS } from "../constants";
import { moviesApi } from "../api";

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [moviesState, setMoviesState] = useState([]);

  useEffect(() => {
    moviesApi.fetchPopularMovies().then((movies) => {
      console.log("Got movies: ", movies);
      setMoviesState(movies.results);
    });
  }, []);

  return (
    <View style={styles.bigContainer}>
      <TouchableOpacity
        onPress={() => navigate(SCREENS.MOVIE_DETAILS)}
        style={styles.singleItem}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableHighlight
            style={{ margin: 20 }}
            onPress={() => {
              console.log("Just press settings");
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: "flex-end",
              }}
              source={require("../../public/pictures/setting.png")}
            />
          </TouchableHighlight>
        </View>

        <>
          {moviesState.length > 1 &&
            moviesState.map((movie) => {
              console.log("REndering a movie");
              return (
                <Text style={{ color: "#eee" }}>{movie.original_title}</Text>
              );
            })}
        </>

        {/* <Text style={{ color: "#eee" }}>Movie Details</Text> */}
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  singleItem: {
    width: "85%",
    height: "95%",
    backgroundColor: "blue",
    justifyContent: "space-between",
    borderRadius: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
  outerCircle: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: -30,
    bottom: 0,
    borderRadius: 40,
    width: 70,
    height: 70,
    backgroundColor: "black",
  },
  innerCircle: {
    borderRadius: 35,
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: "white",
  },
});

export default HomeScreen;
