import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";

export default function Appointment() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user.firstName) {
      getAppointments();
    }
  }, [user]);

  const getAppointments = () => {
    GlobalApi.getAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        try {
          setAppointments(resp.data.data);
          console.log(resp?.data?.data);
        } catch (error) {
          console.log("Error " + error);
        }
      }
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title="My Appointments" backBtn={false} />
    </View>
  );
}
