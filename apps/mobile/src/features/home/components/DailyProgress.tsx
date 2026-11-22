import { View, Text, StyleSheet } from "react-native";
import {
  ListChecks,
  CheckCircle2,
  XCircle,
} from "lucide-react-native";

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
            <View style={[styles.fill, { width: `${percentage}%` }]} />
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <StatItem
          icon={<ListChecks size={17} color="rgba(255,255,255,0.65)" />}
          value={total}
          label="Total"
        />

        <StatItem
          icon={<CheckCircle2 size={17} color="#4ADE80" />}
          value={completed}
          label="Completed"
          color="#4ADE80"
        />

        <StatItem
          icon={<XCircle size={17} color="#F87171" />}
          value={incomplete}
          label="To do"
          color="#F87171"
        />
      </View>
    </View>
  );
}

function StatItem({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  color?: string;
}) {
  return (
    <View style={styles.stat}>
      {icon}

      <Text style={[styles.statValue, color && { color }]}>
        {value}
      </Text>

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
    gap: 8,
    marginTop: 16,
  },

  stat: {
    flex: 1,
    minHeight: 90,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    paddingVertical: 10,
  },

  statValue: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },

  statLabel: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 11,
    textAlign: "center",
  },
});