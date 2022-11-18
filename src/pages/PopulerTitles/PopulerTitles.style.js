import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: 'white',
        padding: 3,
        marginBottom: 7,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'gray',
    },
    body_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    image: {
        borderRadius: 10,
        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width / 2,
    },
    category_title: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    }
})

export default styles;