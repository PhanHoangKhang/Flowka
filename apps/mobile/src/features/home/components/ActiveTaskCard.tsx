import { View, Text, StyleSheet } from "react-native";
import { Clock, Pause, Check } from "lucide-react-native";
import { colors } from "@/constants/color";

export default function ActiveTaskCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      </View>

      <Text style={styles.title}>Study Java Collections</Text>

      <View style={styles.meta}>
        <Clock size={14} color="rgba(255,255,255,0.55)" />
        <Text style={styles.metaText}>45 min</Text>
        <Text style={styles.separator}>·</Text>
        <Text style={styles.metaText}>24:18 left</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.pauseButton}>
          <Pause size={16} color={colors.white} />
          <Text style={styles.pauseText}>Pause</Text>
        </View>

        <View style={styles.completeButton}>
          <Check size={17} color={colors.foreground} />
          <Text style={styles.completeText}>Complete</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(157,101,253,0.09)",
    borderWidth: 1,
    borderColor: "rgba(157,101,253,0.18)",
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  statusText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 13,
  },

  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  metaText: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
  },

  separator: {
    color: "rgba(255,255,255,0.4)",
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  pauseButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.08)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  pauseText: {
    color: colors.white,
    fontWeight: "700",
  },

  completeButton: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  completeText: {
    backgroundColor: colors.foreground,
    fontWeight: "800",
  },
});