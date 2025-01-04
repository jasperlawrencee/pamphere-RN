import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View className="bg-blue-200 w-full h-full items-center justify-center" >
      <Text className="text-xl">Hello bahog lubot</Text>
      <Link href="/menu">Goto Menu</Link>
    </View>
  );
}
