import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import Colors from "../../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";

export default function BookingInfo({ hospital }) {
  return (
    <View>
      <PageHeader title="Book Appointment" />
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: hospital?.attributes?.Image?.data[0]?.attributes?.url,
          }}
          style={{ width: 100, height: 100, borderRadius: 99 }}
        />
        <View>
          <Text
            style={{
              fontFamily: "appfont-semi",
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            {hospital?.attributes?.Name}
          </Text>
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
              style={{
                fontFamily: "appfont",
                fontSize: 16,
                color: Colors.darkGray,
                width: "70%",
              }}
            >
              {hospital?.attributes?.Address}
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
