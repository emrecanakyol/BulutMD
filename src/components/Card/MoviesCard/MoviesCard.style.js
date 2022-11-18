import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        margin: 10,
        padding: 10,
    },
    image: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        borderRadius: 10,
    },
    title: {
        paddingTop: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    text_container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    programType: {
        color: 'white',
        textAlign: 'right'
    },
    releaseYear: {
        color: 'white'
    }
})

export default styles;