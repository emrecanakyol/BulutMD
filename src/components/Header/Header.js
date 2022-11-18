import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Header.style';

//Custom Headerı tüm sayfalarda görüntülemek için tasarlıyoruz.
const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
              <Ionicons style={styles.icon} name="menu"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PopulerTitles')}>
              <Text style={styles.title}>BulutMD</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons style={styles.icon} name="search"/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;