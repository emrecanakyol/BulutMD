import React, { useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../components/Hooks/useFetch';
import styles from './SearchBar.style';

//Tüm datamız üzerinde filtreleme işlemi yapan Search ekranı oluşturuyoruz.
const SearchBar = () => {
  const {data, loading} = useFetch();
  const [list, setList] = useState(data);

  const handleSearch = text => {
        const filteredList = data.filter(search => {
        const searchedText = text.toLowerCase();
        const currentTitle = search.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList); 
}

if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: "center"}} size="large" />
}

const renderMovies = ({item}) => <Text style={{color: 'white'}}>{item.title}</Text>

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.text_input} 
                placeholder='Ne aramıştınız?' 
                onChangeText={handleSearch}
            />
            <FlatList
                numColumns={2}
                horizontal={false}
                data={list}
                renderItem={renderMovies}
            />
        </View>
    )
}

export default SearchBar;