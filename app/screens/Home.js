import { useAuth } from "@clerk/clerk-expo";
import { ScrollView } from "react-native";
import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import Slider from "../components/Home/Slider";
import Categories from "../components/Home/Categories";
import PremiumHospitals from "../components/Home/PremiumHospitals";
import Colors from "../../utils/Colors";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <ScrollView
      style={{
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.white,
        flex: 1,
      }}
    >
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories />
      <PremiumHospitals />
      {/*<Button title="signOut" onPress={() => signOut()}></Button>*/}
    </ScrollView>
  );
}
