import { View, Text, StyleSheet } from "react-native";
import { CircleCheck, Clock, Pause, Play } from "lucide-react-native";
import { colors } from "@/constants/color";

export default function ActiveTaskCard() {
  return (
    <View style={styles.container}>
      <View style={styles.statusRow}>
        <View style={styles.status}>
          <Play size={14} color={colors.primary} fill={colors.primary} />
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      </View>

      <Text style={styles.title}>Study Java Collections</Text>

      <View style={styles.category}>
        <Text style={styles.categoryText}>University</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.info}>
          <Clock size={16} color="rgba(255,255,255,0.7)" />
          <Text style={styles.infoText}>45 min</Text>
        </View>

        <Text style={styles.infoText}>Today</Text>
      </View>

      <View style={styles.timerArea}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>24:18</Text>
          <Text style={styles.timerCaption}>left</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <View style={styles.pauseButton}>
          <Pause size={18} color={colors.white} />
          <Text style={styles.pauseText}>Pause</Text>
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(157,101,253,0.12)",
    borderWidth: 1,
    borderColor: "rgba(157,101,253,0.22)",
    borderRadius: 24,
    padding: 18,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  statusText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "700",
  },

  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 16,
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },

  categoryText: {
    color: colors.white,
    fontSize: 12,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginTop: 14,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  infoText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
  },

  timerArea: {
    alignItems: "flex-end",
    marginTop: -65,
    marginBottom: 25,
  },

  timer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 7,
    borderColor: colors.primary,
    borderRightColor: "rgba(157,101,253,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },

  timerCaption: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 11,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },

  pauseButton: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.10)",
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
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  
});