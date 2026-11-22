import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/color";

import HomeHeader from "@/features/home/components/HomeHeader";
import DailyProgress from "@/features/home/components/DailyProgress";
import ActiveTaskCard from "@/features/home/components/ActiveTaskCard";
import TaskSection from "@/features/home/components/TaskSection";
import HomeBottomNav from "@/features/home/components/HomeBottomNav";

import { mockTasks } from "@/features/home/data/mockTasks";

export default function HomeScreen() {
  const unfinishedTasks = mockTasks.filter((task) => !task.completed);
  const completedTasks = mockTasks.filter((task) => task.completed);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <HomeHeader />

          <DailyProgress
            completed={completedTasks.length}
            total={mockTasks.length}
          />

          <ActiveTaskCard />

          <TaskSection
            title="To Do"
            tasks={unfinishedTasks}
            color={colors.primary}
          />

          <TaskSection
            title="Done"
            tasks={completedTasks}
            color="#A5D6A7"
          />
        </ScrollView>

        <HomeBottomNav />
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
    padding: 20,
    gap: 24,
    paddingBottom: 30,
  },
});
