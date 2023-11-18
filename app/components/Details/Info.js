import { View, Text, FlatList } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import SubHeader from "../Home/SubHeader";
import HorizontalLine from "../Shared/HorizontalLine";

export default function Info({ hospital }) {
  return (
    hospital && (
      <View>
        <Text style={{ fontSize: 23, fontFamily: "appfont-semi" }}>
          {hospital?.attributes?.Name}
        </Text>
        <FlatList
          data={hospital?.attributes?.categories?.data}
          horizontal
          renderItem={({ item, index }) => (
            <Text style={{ marginRight: 10, color: Colors.darkGray }}>
              {item?.attributes?.Name}
            </Text>
          )}
        />
        <HorizontalLine />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={22} color={Colors.primary} />
          <Text
            style={{ fontFamily: "appfont", fontSize: 18, color: Colors.gray }}
          >
            {hospital?.attributes?.Address}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Ionicons name="time" size={22} color={Colors.primary} />
          <Text
            style={{ fontFamily: "appfont", fontSize: 18, color: Colors.gray }}
          >
            Mon Sun | 11AM - 8PM
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.lightGray,
            margin: 5,
            marginBottom: 15,
            marginTop: 10,
          }}
        />
        <ActionButton />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.lightGray,
            margin: 5,
            marginBottom: 15,
            marginTop: 15,
          }}
        />
        <SubHeader title="About" />
        <Text>{hospital?.attributes?.Description}</Text>
      </View>
    )
  );
}
