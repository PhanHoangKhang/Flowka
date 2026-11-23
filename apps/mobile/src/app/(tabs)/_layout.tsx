import { View } from "react-native";
import { Tabs } from "expo-router";

import AppHeader from "@/components/layout/AppHeader";
import BottomNavBar from "@/components/layout/BottomNavBar";
import { colors } from "@/constants/color";

export default function TabsLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.foreground }}>
      <AppHeader />

      <Tabs
        tabBar={() => <BottomNavBar />}
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: colors.foreground,
          },
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="plan" />
        <Tabs.Screen name="progress" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </View>
  );
}