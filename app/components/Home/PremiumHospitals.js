import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";

export default function PremiumHospitals() {
  const [hospitalList, sethospitalList] = useState([]);

  useEffect(() => {
    getPremiumHospitals();
  }, []);

  if (!hospitalList) return null;

  const getPremiumHospitals = () => {
    GlobalApi.getPremiumHospitals().then((resp) => {
      sethospitalList(resp.data.data);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <SubHeader title="Our premium hospitals" />
      <FlatList
        data={hospitalList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <HospitalItem hospital={item} />}
      />
    </View>
  );
}
