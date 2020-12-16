import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { Surface } from "react-native-paper";

function DashboardCard({ children }) {
  return (
    <Surface
      style={{
        flex: 1,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
      elevation={4}
    >
      {children}
    </Surface>
  );
}

export default function DashboardScreen() {
  return (
    <View>
      <Header
        centerComponent={{ text: "DASHBOARD", style: { color: "#fff" } }}
      />
      <View style={{ flexDirection: "row", padding: 20 }}>
        <DashboardCard>
          <Text h3>240{"\n"}steps</Text>
        </DashboardCard>
        <DashboardCard>
          <Text h3>stuff</Text>
        </DashboardCard>
      </View>
    </View>
  );
}
