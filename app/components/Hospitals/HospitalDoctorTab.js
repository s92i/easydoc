import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../../utils/Colors";

export default function HospitalDoctorTab({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(0);
            activeTab("Hospitals");
          }}
          style={[activeIndex == 0 ? styles.activeTab : styles.inactiveTab]}
        >
          <Text
            style={[activeIndex == 0 ? styles.activeText : styles.inactiveText]}
          >
            Hospitals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(1);
            activeTab("Doctors");
          }}
          style={[activeIndex == 1 ? styles.activeTab : styles.inactiveTab]}
        >
          <Text
            style={[activeIndex == 1 ? styles.activeText : styles.inactiveText]}
          >
            Doctors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeText: {
    textAlign: "center",
    fontFamily: "appfont",
    fontSize: 18,
    color: Colors.primary,
  },
  inactiveText: {
    textAlign: "center",
    fontFamily: "appfont",
    fontSize: 18,
    color: Colors.gray,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    padding: 3,
  },
  inactiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
    padding: 3,
  },
});
