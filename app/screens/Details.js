import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/Shared/PageHeader";
import Info from "../components/Details/Info";
import Colors from "../../utils/Colors";

export default function Details() {
  const [hospitalDetail, setHospitalDetail] = useState();
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    setHospitalDetail(param?.hospital);
  }, []);

  if (!hospitalDetail) return null;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
          <PageHeader title="" />
        </View>
        <View>
          <Image
            source={{
              uri: hospitalDetail?.attributes?.Image?.data[0]?.attributes?.url,
            }}
            style={{ width: "100%", height: 240 }}
          />
          <View
            style={{
              marginTop: -20,
              backgroundColor: Colors.white,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <Info hospital={hospitalDetail} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Book", { hospital: hospitalDetail })
        }
        style={{
          padding: 13,
          backgroundColor: Colors.primary,
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontFamily: "appfont-semi",
            fontSize: 17,
          }}
        >
          Book Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
