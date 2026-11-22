import { View, Text, StyleSheet } from "react-native";
import { Circle, CircleCheck, CalendarDays } from "lucide-react-native";
import { colors } from "@/constants/color";
import type { Task } from "../data/mockTasks";

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      {task.completed ? (
        <CircleCheck
          size={22}
          color={colors.primary}
          fill={colors.primary}
        />
      ) : (
        <Circle size={22} color="rgba(255,255,255,0.7)" />
      )}

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            task.completed && styles.completedTitle,
          ]}
        >
          {task.title}
        </Text>

        <View style={styles.meta}>
          <CalendarDays size={13} color="rgba(255,255,255,0.55)" />

          <Text style={styles.metaText}>Today · {task.duration} min</Text>
        </View>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryText}>{task.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.04)",
  },

  content: {
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },

  completedTitle: {
    color: "rgba(255,255,255,0.55)",
    textDecorationLine: "line-through",
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 6,
  },

  metaText: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
  },

  category: {
    backgroundColor: "rgba(157,101,253,0.16)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  categoryText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 11,
  },
});