import { View, Text, StyleSheet } from "react-native";
import { CircleCheck, Circle } from "lucide-react-native";
import { colors } from "@/constants/color";

type Props = {
  completed: number;
  total: number;
};

export default function DailyProgress({ completed, total }: Props) {
  const incomplete = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.circle}>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>

        <View style={styles.progressContent}>
          <Text style={styles.title}>Today's progress</Text>

          <Text style={styles.subtitle}>
            {completed} of {total} tasks completed
          </Text>

          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { width: `${percentage}%` },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <StatItem
          icon={<Circle color={colors.white} size={18} />}
          value={total}
          label="Total tasks"
        />

        <StatItem
          icon={<CircleCheck color={colors.primary} size={18} />}
          value={completed}
          label="Completed"
        />

        <StatItem
          icon={<Circle color={colors.white} size={18} />}
          value={incomplete}
          label="Incomplete"
        />
      </View>
    </View>
  );
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <View style={styles.stat}>
      {icon}

      <Text style={styles.statValue}>{value}</Text>

      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.04)",
    padding: 16,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 8,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  percentage: {
    color: colors.white,
    fontSize: 21,
    fontWeight: "800",
  },

  progressContent: {
    flex: 1,
    gap: 8,
  },

  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

  subtitle: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 12,
  },

  track: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderRadius: 8,
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 8,
  },

  stats: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },

  stat: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    gap: 5,
  },

  statValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

  statLabel: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 11,
  },
});