import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, MovieDetailsScreen } from "./src/screens";
import { rootStore, RootStoreContext } from "./src/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootStoreContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
