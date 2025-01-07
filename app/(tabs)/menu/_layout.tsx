import { Stack } from "expo-router";

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu"}} />
      <Stack.Screen 
        name="login"
        options={{ 
          title: "Login",
          headerShown: false,
          }} />
      <Stack.Screen
        name="register"
        options={{ 
          title: "Register",
          headerShown: false,
          }} />
    </Stack>
  );
}