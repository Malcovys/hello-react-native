import CustomBtn from "@/components/Button";
import Card, { CardName } from "@/components/Card";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

export default function Main() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(-1);
  const [cards, setCards] = useState<CardName[]>([
    "As de carrreau",
    "As de pique",
    "As de treffle",
    "Chevalier de pique",
    "Reine de carreau",
    "Reine de coeur",
    "Roi de pique",
    "Roi de treffle"
  ]);

  const handleRotateAll = () => {
    console.log("rotale all !")
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Card initIndex={3} cards={cards}/>
        {/* <Card/>
        <Card/> */}
      </View>
      
      {/* <View style={styles.section}>
        <Card/>
        <CustomBtn onPress={handleRotateAll}/>
        <Card/>
      </View>

      <View style={styles.section}>
        <Card/>
        <Card/>
        <Card/>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#385f97ff",
  },

  section: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    margin: 5
  }
})