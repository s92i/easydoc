import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";
import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import Slider from "../components/Home/Slider";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      {/*<Button title="signOut" onPress={() => signOut()}></Button>*/}
    </View>
  );
}
