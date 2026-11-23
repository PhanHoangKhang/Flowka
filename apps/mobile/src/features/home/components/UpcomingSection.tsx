import { View, Text, StyleSheet } from "react-native";
import { CalendarDays, GraduationCap, ChevronRight } from "lucide-react-native";
import { colors } from "@/constants/color";
import type { UpcomingItem } from "../data/mockTasks";

type Props = {
  items: UpcomingItem[];
};

export default function UpcomingSection({ items }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <CalendarDays color={colors.primary} size={20} />
          <Text style={styles.title}>Upcoming</Text>
        </View>

        <Text style={styles.viewAll}>View all ›</Text>
      </View>

      {items.length === 0 ? (
        <Text style={styles.empty}>Nothing coming up.</Text>
      ) : (
        items.slice(0, 3).map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.iconContainer}>
              <GraduationCap color={colors.primary} size={20} />
            </View>

            <View style={styles.content}>
              <Text style={styles.itemTitle}>{item.title}</Text>

              <Text style={styles.meta}>
                {item.date} · {item.time}
              </Text>
            </View>

            <View style={styles.daysBadge}>
              <Text style={styles.daysText}>
                {item.daysLeft === 0
                  ? "Today"
                  : `${item.daysLeft} days`}
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

  viewAll: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
  },

  empty: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    borderRadius: 18,
    padding: 14,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    gap: 5,
  },

  itemTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
  },

  meta: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
  },

  daysBadge: {
    backgroundColor: colors.pink,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  daysText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
  },
});