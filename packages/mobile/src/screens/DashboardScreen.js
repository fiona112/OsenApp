import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import { Surface } from "react-native-paper";
import { ProgressChart } from "react-native-chart-kit";

function DashboardCard({ children, title }) {
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
      <View style={{ padding: 10 }}>
        <Text h5 style={{ textAlign: "center" }}>
          {title}
        </Text>
      </View>
      {children}
    </Surface>
  );
}

function StatisticCard() {
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <DashboardCard title="WALKING CHALLENGE">
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: 100,
        }}
      >
        <View style={{ position: "absolute" }}>
          <Text>76%</Text>
        </View>
        <View style={{ position: "absolute" }}>
          <ProgressChart
            height={220}
            width={220}
            strokeWidth={16}
            data={{ data: [0.7] }}
            hideLegend={true}
            chartConfig={chartConfig}
            background
          />
        </View>
      </View>
    </DashboardCard>
  );
}

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{ text: "DASHBOARD", style: { color: "#fff" } }}
      />
      <View style={{ flexDirection: "row", flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <StatisticCard />
          <StatisticCard />
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
					<DashboardCard title="LOCAL LEADERS">
            <Text>
              1. John Doe
            </Text>
          </DashboardCard>
        </View>
      </View>
    </View>
  );
}
