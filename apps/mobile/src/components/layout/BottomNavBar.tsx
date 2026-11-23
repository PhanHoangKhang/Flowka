import { View, Text, StyleSheet } from "react-native";
import {
  House,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  UserRound,
  Plus,
} from "lucide-react-native";

import { colors } from "@/constants/color";

const tabs = [
  { label: "Home", icon: House, active: true },
  { label: "Plan", icon: CalendarDays, active: false },
  { label: "Progress", icon: ChartNoAxesColumnIncreasing, active: false },
  { label: "Profile", icon: UserRound, active: false },
];

export default function BottomNavBar() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {tabs.map(({ label, icon: Icon, active }) => (
          <View key={label} style={styles.tab}>
            <View style={[styles.iconContainer, active && styles.active]}>
              <Icon
                size={20}
                color={active ? colors.white : "rgba(255,255,255,0.65)"}
              />
            </View>

            <Text style={[styles.label, active && styles.activeLabel]}>
              {label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 3,
  },

  iconContainer: {
    width: 36,
    height: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  active: {
    backgroundColor: colors.primary,
  },

  label: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 10,
  },

  activeLabel: {
    color: colors.white,
    fontWeight: "700",
  },

  addButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});