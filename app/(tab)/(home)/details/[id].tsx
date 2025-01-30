import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();
    
    return (
        <View>
            <Text>Details of user {id}</Text>
            <Link href="/">Go back to home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});