import { View, Text, StyleSheet } from "react-native";
import {
  House,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  UserRound,
} from "lucide-react-native";
import { colors } from "@/constants/color";

const tabs = [
  { label: "Home", icon: House, active: true },
  { label: "Plan", icon: CalendarDays, active: false },
  { label: "Progress", icon: ChartNoAxesColumnIncreasing, active: false },
  { label: "Profile", icon: UserRound, active: false },
];

export default function HomeBottomNav() {
  return (
    <View style={styles.container}>
      {tabs.map(({ label, icon: Icon, active }) => (
        <View key={label} style={styles.tab}>
          <View style={[styles.iconContainer, active && styles.active]}>
            <Icon
              size={21}
              color={active ? colors.white : "rgba(255,255,255,0.65)"}
            />
          </View>

          <Text style={[styles.label, active && styles.activeLabel]}>
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: "#12121F",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.08)",
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    flex: 1,
  },

  iconContainer: {
    width: 45,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  active: {
    backgroundColor: colors.primary,
  },

  label: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 11,
  },

  activeLabel: {
    color: colors.white,
    fontWeight: "700",
  },
});