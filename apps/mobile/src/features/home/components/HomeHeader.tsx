import { View, Text, StyleSheet } from "react-native";
import { Bell } from "lucide-react-native";

import { colors } from "@/constants/color";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Good afternoon, Khang 👋</Text>
        <Text style={styles.subtitle}>Let's make today count.</Text>
      </View>

      <View style={styles.notification}>
        <Bell size={22} color={colors.white} />
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    gap: 6,
  },

  greeting: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "800",
  },

  subtitle: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 13,
  },

  notification: {
    position: "relative",
    padding: 10,
    marginLeft: 8,
  },

  notificationDot: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});