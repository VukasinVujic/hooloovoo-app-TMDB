import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SCREENS } from "../constants";

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Lalalalala</Text>
      <TouchableOpacity
        onPress={() => navigate(SCREENS.MOVIE_DETAILS)}
        style={{
          width: 300,
          height: 200,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#eee" }}>Movie Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
