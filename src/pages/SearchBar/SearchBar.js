import React, { useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../components/Hooks/useFetch';
import styles from './SearchBar.style';

//Search görüntülenecek datalarımızın tasarımlarını Card sayfamızda oluşturuyoruz.
import SearchBarCard from '../../components/Card/SearchBarCard';

//Tüm datamız üzerinde filtreleme işlemi yapan Search ekranı oluşturuyoruz.
const SearchBar = () => {
  const {data, loading} = useFetch();
  const [list, setList] = useState(data);

  const handleSearch = text => {
        const filteredList = data.filter(search => {
        const searchedText = text.toLowerCase();
        const currentTitle = search.title.toLowerCase();
        //Arama input’una 3 karakter girilince tüm veri üzerinde filtreleme koşulunu sağlamaktayız.
        if( text.length > 2) {
            return currentTitle.indexOf(searchedText) > -1;
          }
    })
    setList(filteredList); 
}

if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: "center"}} size="large" />
}

//Searchda görüntülenecek itemlerimizi SearchBarCard'a yönlendiriyoruz.
const renderMovies = ({item}) => <SearchBarCard search={item}/>

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