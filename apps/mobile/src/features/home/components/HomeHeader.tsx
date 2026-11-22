import { View, Text, StyleSheet } from "react-native";
import { Bell } from "lucide-react-native";
import { colors } from "@/constants/color";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good afternoon 👋</Text>
        <Text style={styles.date}>Sunday, Nov 22</Text>
      </View>

      <View style={styles.notification}>
        <Bell color={colors.white} size={22} />
        <View style={styles.dot} />
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

  greeting: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "700",
  },

  date: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 14,
    marginTop: 6,
  },

  notification: {
    position: "relative",
    padding: 8,
  },

  dot: {
    position: "absolute",
    top: 6,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});