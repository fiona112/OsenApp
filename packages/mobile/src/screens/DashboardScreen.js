import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

export default function DashboardScreen() {
  return (
    <View>
      <Header
        centerComponent={{ text: "DASHBOARD", style: { color: "#fff" } }}
      />
      <Text>Hello world</Text>
    </View>
  );
}
