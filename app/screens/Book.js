import { View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import BookingInfo from "../components/Book/BookingInfo";
import ActionButton from "../components/Details/ActionButton";
import HorizontalLine from "../components/Shared/HorizontalLine";
import Booking from "../components/Book/Booking";

export default function Book() {
  const param = useRoute().params;

  return (
    <View style={{ padding: 20 }}>
      <BookingInfo hospital={param?.hospital} />
      <ActionButton />
      <HorizontalLine />
      <Booking />
    </View>
  );
}
