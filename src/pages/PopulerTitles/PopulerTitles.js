import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PopulerTitles.style';

//Popüler Başlıklar sayfamızdaki Film ve Dizi butonlarımızı tasarlayıp Navigate ile yönledirmesini yapıyoruz.
const PopulerTitles = ({navigation}) => {
    return (   
        <View style={styles.container}>
            <Text style={styles.title}>Popüler Başlıklar</Text>
            <View style={styles.body_container}>
                <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
                    <Image style={styles.image} source={require('../../assets/jumanji.jpg')}/>
                    <Text style={styles.category_title}>Film</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Series')}>
                    <Image style={styles.image} source={require('../../assets/the_witcher.jpg')}/>
                    <Text style={styles.category_title}>Dizi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PopulerTitles;