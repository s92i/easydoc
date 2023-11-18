import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import HospitalCard from "../Shared/HospitalCard";

export default function HospitalList({ list }) {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <HospitalCard hospital={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
