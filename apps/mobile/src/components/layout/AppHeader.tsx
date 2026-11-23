import { View, Text, StyleSheet, Pressable } from "react-native";
import { Bell } from "lucide-react-native";

import { colors } from "@/constants/color";

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Flowka</Text>

      <Pressable style={styles.notification}>
        <Bell size={20} color={colors.white} />
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },

  logo: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.8,
  },

  notification: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",

    width: 40,
    height: 40,
  },

  notificationDot: {
    position: "absolute",
    top: 7,
    right: 7,

    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: colors.primary,
  },
});