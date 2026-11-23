import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/color";

import HomeHeader from "@/features/home/components/HomeHeader";
import DailyProgress from "@/features/home/components/DailyProgress";
import ActiveTaskCard from "@/features/home/components/ActiveTaskCard";
import TaskSection from "@/features/home/components/TaskSection";

import { mockTasks, upcomingTasks } from "@/features/home/data/mockTasks";
import UpcomingSection from "@/features/home/components/UpcomingSection";
import HomeIntro from "@/features/home/components/HomeIntro";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function DateStrip() {
  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    return date;
  });

  return (
    <View style={styles.dateContainer}>
      <View style={styles.dateHeader}>
        <Text style={styles.dateTitle}>This week</Text>

        <Text style={styles.month}>
          {today.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </Text>
      </View>

      <View style={styles.dateRow}>
        {week.map((date, index) => {
          const isToday = date.toDateString() === today.toDateString();

          return (
            <View key={index} style={styles.dateItem}>
              <Text style={styles.dayLabel}>{WEEKDAYS[index]}</Text>

              <View style={[styles.dateNumber, isToday && styles.today]}>
                <Text style={[styles.numberText, isToday && styles.todayText]}>
                  {date.getDate()}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const unfinishedTasks = mockTasks
    .filter((task) => !task.completed)
    .sort((a, b) => {
      if (!a.startTime) return 1;
      if (!b.startTime) return -1;

      return a.startTime.localeCompare(b.startTime);
    });

  const completedTasks = mockTasks.filter((task) => task.completed);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <HomeIntro />

          <DateStrip />

          <DailyProgress
            completed={completedTasks.length}
            total={mockTasks.length}
          />

          <ActiveTaskCard />

          <TaskSection
            title="Next"
            tasks={unfinishedTasks}
            color={colors.white}
          />

          <UpcomingSection items={upcomingTasks} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.foreground,
  },

  screen: {
    flex: 1,
    backgroundColor: colors.foreground,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
    gap: 22,
  },

  dateContainer: {
    gap: 14,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    borderRadius: 20,
    padding: 16,
  },

  dateHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dateTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

  month: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateItem: {
    alignItems: "center",
    gap: 8,
  },

  dayLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11,
  },

  dateNumber: {
    width: 38,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  today: {
    backgroundColor: colors.primary,
  },

  numberText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },

  todayText: {
    color: colors.white,
    fontWeight: "800",
  },
});
