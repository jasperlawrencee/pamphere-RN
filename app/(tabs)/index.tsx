import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

export default function HomePage() {
  return (
    <View className="bg-white w-full h-full items-center justify-center" >
      <Text className="text-xl">Hello bahog lubot</Text>
      <Link href="/menu">Goto Menu</Link>
    </View>
  );
}
