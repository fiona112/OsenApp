import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "~/navigation/TabsNavigation";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  );
}
