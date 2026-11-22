import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/color";

type Props = {
  completed: number;
  total: number;
};

export default function DailyProgress({ completed, total }: Props) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's progress</Text>
        <Text style={styles.subtitle}>
          {completed} of {total} completed
        </Text>
      </View>

      <View style={styles.progressRow}>
        <View style={styles.track}>
          <View
            style={[
              styles.fill,
              { width: `${percentage}%` },
            ]}
          />
        </View>

        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 16,
    borderRadius: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },

  subtitle: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 12,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 14,
  },

  track: {
    flex: 1,
    height: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },

  percentage: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600",
  },
});