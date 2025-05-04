import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


const CustomBtn = ({onPress}:{onPress: () => void }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <View>
                    <Text style={styles.text}>Rotate All</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginHorizontal: 15
    },

    btn: {
        backgroundColor: "#eb2160de",
        borderRadius: 30,
        padding: 20,
    },

    text: {
        color: "#fdfbffff"
    }
})

export default CustomBtn;