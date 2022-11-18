import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './MoviesCard.style';

//Filmler ekranının tasarımını oluşturuyoruz.
const MoviesCard = ({movies}) => {
       return (
        <ScrollView style={styles.container}>
            <View style={styles.body_container}>
                <Image style={styles.image} source={{uri: movies.images["Poster Art"].url}}/>
                <Text style={styles.title}>{movies.title}</Text>
                <View style={styles.text_container}>
                    <Text style={styles.programType}>{movies.programType}</Text>
                    <Text style={styles.releaseYear}>{movies.releaseYear}</Text>
                </View>
            </View>
        </ScrollView>
       )
}

export default MoviesCard;