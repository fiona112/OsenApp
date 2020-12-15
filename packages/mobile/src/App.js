import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "~/screens/LoginScreen.js";
import { Input, ThemeProvider } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoggedInUserContext from "~/contexts/LoggedInUser";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "~/navigation/RootNavigation";
import Colors from "~/constants/Colors";

const themes = {
  light: {
    Header: {
      backgroundColor: Colors.accent,
    },
    Input: {
      inputContainerStyle: {
        backgroundColor: "#DDD",
        borderRadius: 90,
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    Button: {
      containerStyle: {
        borderRadius: 90,
      },
    },
  },
};

export default function App() {
  const [authJwt, setAuthJwt] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const jwt = await AsyncStorage.getItem("session-jwt");
        setAuthJwt(jwt);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ThemeProvider useDark={false} theme={themes.light}>
        <LoggedInUserContext.Provider value={{ authJwt, setAuthJwt }}>
          {!authJwt ? <LoginScreen /> : <RootNavigation />}
        </LoggedInUserContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
