import { Image, StyleSheet, Text, View } from "react-native";
import doctors from "../../assets/images/doctors.jpg";
import SignInWithOAuth from "../components/SignInWithOAuth";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={doctors} style={styles.appImage} />
      <View
        style={{
          backgroundColor: "#fff",
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book appointments effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: "cover",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
