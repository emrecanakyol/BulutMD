import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SeriesCard.style';

//Diziler ekranının tasarımını oluşturuyoruz.
const SeriesCard = ({series}) => {
       return (
        <View style={styles.container}>
            <View style={styles.body_container}>
                <Image style={styles.image} source={{uri: series.images["Poster Art"].url}}/>
                <Text style={styles.title}>{series.title}</Text>
                <View style={styles.text_container}>
                    <Text style={styles.programType}>{series.programType}</Text>
                    <Text style={styles.releaseYear}>{series.releaseYear}</Text>
                </View>
            </View>
        </View>
       )
}

export default SeriesCard;