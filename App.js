import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./app/Screens/Login";
import TabNavigation from "./app/Navigations/TabNavigation";
import { NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY } from "@env";
import Colors from "./utils/Colors";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    appfont: require("./assets/fonts/Outfit-Regular.ttf"),
    "appfont-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "appfont-semi": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "appfont-light": require("./assets/fonts/Outfit-Light.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <ClerkProvider publishableKey={NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
