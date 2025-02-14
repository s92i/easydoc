import { ActivityIndicator, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../components/Shared/PageHeader";
import HospitalDoctorTab from "../components/Hospitals/HospitalDoctorTab";
import HospitalList from "../components/Hospitals/HospitalList";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../../utils/Colors";
import DoctorCardItem from "../components/Shared/DoctorCardItem";

export default function HospitalDoctorsListScreen() {
  const [hospital, setHospital] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospitals");
  const param = useRoute().params;

  useEffect(() => {
    activeTab == "Hospitals"
      ? getHospitalsByCategory()
      : getDoctorsByCategory();
  }, [activeTab]);

  const getHospitalsByCategory = () => {
    GlobalApi.getHospitalsByCategory(param?.categoryName).then((resp) => {
      setHospital(resp.data.data);
    });
  };

  const getDoctorsByCategory = () => {
    GlobalApi.getDoctorsByCategory(param?.categoryName).then((resp) => {
      setDoctor(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />
      {!hospital?.length ? (
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={{ marginTop: "50%" }}
        />
      ) : activeTab == "Hospitals" ? (
        <HospitalList list={hospital} />
      ) : (
        <DoctorCardItem list={doctor} />
      )}
    </View>
  );
}
