import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import { SCREENS } from "../constants";
import { moviesApi } from "../api";
import { useStore } from "../store";

export const HomeScreen = observer(() => {
  const { navigate } = useNavigation();
  const { moviesStore } = useStore();
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = () => {
    setIsFetching(true);

    moviesApi
      .fetchPopularMovies()
      .then((response) => {
        console.log("Adding movies to store", response);
        moviesStore.addMovies(response.results);
        console.log("Added movies");
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
    console.log("STORE:", moviesStore);
  }, []);

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

          <View>
            {moviesStore.moviesList.map((movie, index) => (
              <Text key={index} style={{ color: "#eee" }}>
                {movie.original_title}
              </Text>
            ))}
          </View>

          {/* <Text style={{ color: "#eee" }}>Movie Details</Text> */}
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
});

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
