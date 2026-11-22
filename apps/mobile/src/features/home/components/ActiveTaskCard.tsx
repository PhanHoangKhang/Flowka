import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Clock, Play } from "lucide-react-native";
import { colors } from "@/constants/color";

type ActiveTask = {
  id: string;
  title: string;
  category: string;
  duration: number;
  remainingTime: string;
};

const activeTasks: ActiveTask[] = [
  {
    id: "1",
    title: "Study Java Collections",
    category: "University",
    duration: 45,
    remainingTime: "24:18 left",
  },
  {
    id: "2",
    title: "Design workout plan",
    category: "Personal",
    duration: 30,
    remainingTime: "18:42 left",
  },
];

export default function ActiveTaskCard() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.heading}>
          <Play size={16} color={colors.primary} fill={colors.primary} />
          <Text style={styles.sectionTitle}>In Progress</Text>
        </View>

        <Text style={styles.count}>{activeTasks.length}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {activeTasks.map((task) => (
          <View key={task.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.category}>{task.category}</Text>
            </View>

            <Text style={styles.title}>{task.title}</Text>

            <View style={styles.meta}>
              <Clock size={14} color="rgba(255,255,255,0.6)" />
              <Text style={styles.metaText}>{task.duration} min</Text>
              <Text style={styles.metaText}>·</Text>
              <Text style={styles.metaText}>{task.remainingTime}</Text>
            </View>

            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
  },

  count: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    backgroundColor: "rgba(157,101,253,0.12)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  list: {
    gap: 12,
    paddingRight: 4,
  },

  card: {
    width: 250,
    borderRadius: 20,
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    gap: 12,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  category: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
  },

  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    minHeight: 40,
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  metaText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
  },

  progressTrack: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 6,
    overflow: "hidden",
  },

  progressFill: {
    width: "65%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
});