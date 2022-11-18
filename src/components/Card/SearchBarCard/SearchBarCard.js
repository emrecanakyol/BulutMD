import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './SearchBarCard.style';

//SearchBar ekranımızda görüntülenecek filmlerin tasarımlarını oluşturuyoruz.
const SearchBarCard = ({search}) => {
       return (
        <ScrollView style={styles.container}>
            <View style={styles.body_container}>
                <Image style={styles.image} source={{uri: search.images["Poster Art"].url}}/>
                <Text style={styles.title}>{search.title}</Text>
                <View style={styles.text_container}>
                    <Text style={styles.programType}>{search.programType}</Text>
                    <Text style={styles.releaseYear}>{search.releaseYear}</Text>
                </View>
            </View>
        </ScrollView>
       )
}

export default SearchBarCard;