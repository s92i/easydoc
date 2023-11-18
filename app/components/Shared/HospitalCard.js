import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../utils/Colors";

export default function HospitalCard({ hospital }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: hospital?.attributes?.Image?.data[0]?.attributes?.url }}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.white,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontFamily: "appfont-semi", fontSize: 18 }}>
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
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.lightGray,
            margin: 5,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={20} color={Colors.primary} />
          <Text>{hospital?.attributes?.Address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Ionicons name="eye-sharp" size={20} color={Colors.primary} />
          <Text>658 views</Text>
        </View>
      </View>
    </View>
  );
}
