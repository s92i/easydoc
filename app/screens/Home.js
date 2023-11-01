import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <View>
      <Button title="signOut" onPress={() => signOut()}>
        <Text>Home</Text>
      </Button>
    </View>
  );
}
