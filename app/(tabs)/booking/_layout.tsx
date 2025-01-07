import { Stack } from "expo-router";

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Booking", headerShown: false}} />
      <Stack.Screen 
        name="checkout"
        options={{ 
          title: "Checkout",
          }} />
    </Stack>
  );
}