import { View, Text, StyleSheet } from "react-native";
import { Plus } from "lucide-react-native";
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
        <View style={styles.titleContainer}>
          <View style={[styles.dot, { backgroundColor: color }]} />
          <Text style={[styles.title, { color }]}>
            {title} · {tasks.length}
          </Text>
        </View>

        <Plus size={20} color={colors.white} />
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

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
  },

  list: {
    gap: 8,
  },
});