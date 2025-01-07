import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <View className="bg-darkColor w-full h-full items-center justify-center" >
      <Text className="text-xl">Hello bahog lubot</Text>
      <Link href="/menu">Goto Menu</Link>
    </View>
  );
}
