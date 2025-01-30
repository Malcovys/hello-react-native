import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
    const tabBarIconSize = 24;

    return (
        <Tabs>
            <Tabs.Screen name="favorites" options={{
                title: "Favorites",
                tabBarIcon: () => <FontAwesome name="star-o" size={tabBarIconSize} />
            }} />
            <Tabs.Screen name="index" options={{
                title: "Recents",
                tabBarIcon: () => <FontAwesome name="clock-o" size={tabBarIconSize} />
            }} />
            <Tabs.Screen name="contacts" options={{
                title: "Contacts",
                tabBarIcon: () => <FontAwesome name="user-o" size={tabBarIconSize} />
            }} />
        </Tabs>
    );
}