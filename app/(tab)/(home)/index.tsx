import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={style.container}
    >
      <Text>Home</Text>
      <Link href='/details' style={{
        color: 'blue',
        textDecorationLine: 'underline',
      }}>View details</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
