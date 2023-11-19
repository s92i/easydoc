import { View, Text } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";

export default function SubHeader({ title, seeAll = true }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontFamily: "appfont-semi" }}>{title}</Text>
      {seeAll ? (
        <Text style={{ fontFamily: "appfont", color: Colors.primary }}>
          See All
        </Text>
      ) : null}
    </View>
  );
}
