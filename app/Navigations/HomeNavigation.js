import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import HospitalDoctorsListScreen from "../Screens/HospitalDoctorsListScreen";
import Details from "../Screens/Details";
import Book from "../Screens/Book";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="hospital-doctor-list-screen"
        component={HospitalDoctorsListScreen}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
}
