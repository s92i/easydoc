import { View } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";

export default function HorizontalLine() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Colors.lightGray,
        margin: 5,
        marginBottom: 10,
      }}
    />
  );
}
