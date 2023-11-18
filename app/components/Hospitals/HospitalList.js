import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HospitalCard from "../Shared/HospitalCard";

export default function HospitalList({ list }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { hospital: item })}
          >
            <HospitalCard hospital={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
