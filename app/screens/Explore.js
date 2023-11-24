import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import HospitalDoctorTab from "../components/Hospitals/HospitalDoctorTab";
import HospitalList from "../components/Hospitals/HospitalList";
import DoctorCardItem from "../components/Shared/DoctorCardItem";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../../utils/Colors";

export default function Explore() {
  const [hospital, setHospital] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospitals");

  useEffect(() => {
    activeTab == "Hospitals" ? getHospitals() : getDoctors();
  }, [activeTab]);

  const getHospitals = () => {
    GlobalApi.getHospitals().then((resp) => {
      setHospital(resp.data.data);
    });
  };

  const getDoctors = () => {
    GlobalApi.getDoctors().then((resp) => {
      setDoctor(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontFamily: "appfont-semi" }}>Explore</Text>
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
