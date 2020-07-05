import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { API, SCREENS } from "../../constants";
import { styles } from "./Movie.style";

const Movie = (props) => {
  const { navigate } = useNavigation();
  const { id, name, date, posterPath, rating } = props;
  const containerHeight = Dimensions.get("window").height - 50;
  const posterAbsolute = `${API.POSTER_BASE}${posterPath}`;

  return (
    <View
      style={{
        height: containerHeight,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <TouchableOpacity
        onPress={() => navigate(SCREENS.MOVIE_DETAILS, { movieId: id })}
        style={styles.singleItem}
      >
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 25,
          }}
          source={{ uri: posterAbsolute }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableHighlight
            style={{ margin: 30 }}
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
              source={require("../../../public/pictures/setting.png")}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text>{rating}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ width: "85%" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "gray" }}>{date}</Text>
      </View>
    </View>
  );
};

export default Movie;
