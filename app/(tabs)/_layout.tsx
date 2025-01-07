import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home", headerTitle: "Pamphere"}} />
        <Tabs.Screen name="search" options={{ title: "Explore", headerTitle: "Search"}} />
        <Tabs.Screen name="booking/index" options={{ title: "Bookings", headerTitle: "Appointments"}} />
        <Tabs.Screen name="menu" options={{ title: "Menu", headerTitle: "Menu", headerShown: false}} />
    </Tabs>
  )
}