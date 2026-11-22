import { View, Text, StyleSheet } from "react-native";

import { colors } from "@/constants/color";
import TaskItem from "./TaskItem";
import type { Task } from "../data/mockTasks";

type Props = {
  title: string;
  tasks: Task[];
  color?: string;
};

export default function TaskSection({
  title,
  tasks,
  color = colors.white,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color }]}>
          {title}
        </Text>

        <Text style={styles.count}>
          {tasks.length} tasks
        </Text>
      </View>

      <View style={styles.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  count: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
  },

  list: {
    gap: 8,
  },
});