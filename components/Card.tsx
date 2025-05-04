import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native"

export type CardName = "As de carrreau" 
                | "As de pique" 
                | "As de treffle" 
                | "Chevalier de pique" 
                | "Reine de carreau" 
                | "Reine de coeur" 
                | "Roi de pique" 
                | "Roi de treffle";

const CARDS_IMAGES: Record<CardName, any> = {
    "As de carrreau": require("./../assets/images/cartes/As de carreau.png"),
    "As de pique": require("./../assets/images/cartes/As de pique.png"),
    "As de treffle": require("./../assets/images/cartes/As de treffle.png"),
    "Chevalier de pique": require("./../assets/images/cartes/Chevalier de pique.png"),
    "Reine de carreau": require("./../assets/images/cartes/Reine de carreau.png"),
    "Reine de coeur": require("./../assets/images/cartes/Reine de coeur.png"),
    "Roi de pique": require("./../assets/images/cartes/Roi de pique.png"),
    "Roi de treffle": require("./../assets/images/cartes/Roi de treffle.png"),
}

const Card = ({initIndex, cards}:{initIndex:number, cards: CardName[]}) => {
    const [cardIndex, setCardIndex] = useState(initIndex);
    const [cardName, setCardName] = useState<CardName>(cards[cardIndex]);

    const changeCard = () => {
        if(cardIndex+1 >= cards.length) {
            setCardIndex(0);
        } else {
            setCardIndex(cardIndex+1);
        }
    }

    useEffect(() => {
        setCardName(cards[cardIndex]);
    }, [cardIndex])

    return(
        <TouchableOpacity onPress={changeCard}>
            <Image style={styles.img} source={CARDS_IMAGES[cardName]}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
  })

export default Card;