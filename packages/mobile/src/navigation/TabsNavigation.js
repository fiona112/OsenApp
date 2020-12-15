import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "~/screens/DashboardScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "~/constants/Colors";

const Tabs = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: Colors.accent,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Dashboard":
              iconName = "ios-pie";
              break;
            default:
              iconName = "ios-help";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Dashboard" component={DashboardScreen} options={{}} />
    </Tabs.Navigator>
  );
}
