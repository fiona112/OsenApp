import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "~/screens/DashboardScreen";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
