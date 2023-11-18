import { View, Image, Text } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";

export default function HospitalItem({ hospital }) {
  return (
    <View
      style={{
        width: 200,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 10,
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: hospital?.attributes?.Image?.data[0]?.attributes?.url }}
        style={{
          width: "100%",
          height: 110,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "appfont-semi", fontSize: 16 }}>
          {hospital?.attributes?.Name}
        </Text>
        <Text style={{ color: Colors.darkGray }}>
          {hospital?.attributes?.Address}
        </Text>
      </View>
    </View>
  );
}
