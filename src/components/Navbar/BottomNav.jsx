import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { t } = useTranslation();
  const activeScreen = route.name;

  const tabs = [
    {
      name: "Home",
      label: t("home"),
      icon: (
        <Ionicons
          name="home-outline"
          size={wp("6%")}
          color={activeScreen === "Home" ? "#007bff" : "#999"}
        />
      ),
    },
    {
      name: "Profile",
      label: t("profile"),
      icon: (
        <FontAwesome5
          name="user"
          size={wp("5.5%")}
          color={activeScreen === "Profile" ? "#007bff" : "#999"}
        />
      ),
    },
    {
      name: "Calendar",
      label: t("calendar"),
      icon: (
        <Feather
          name="calendar"
          size={wp("6%")}
          color={activeScreen === "Calendar" ? "#007bff" : "#999"}
        />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => navigation.navigate(tab.name)}
          >
            {tab.icon}
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              allowFontScaling={false}
              style={[
                styles.tabLabel,
                { color: activeScreen === tab.name ? "#007bff" : "#999" },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: wp("3%"),
    left: wp("4%"),
    right: wp("4%"),
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: hp("8%"),
    borderRadius: 30,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: wp("2.8%"),
    fontWeight: "500",
    marginTop: 3,
  },
});

export default BottomNav;
