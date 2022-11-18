import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './Movies.style';

//Filmler ekranında datamızı Custom Hook yapımızla çekiyoruz.
import useFetch from '../../components/Hooks/useFetch';

//Film datalarımızın tasarımlarını Card sayfamızda oluşturuyoruz.
import MoviesCard from '../../components/Card/MoviesCard';

export default Movies = () => {
  const {data, loading} = useFetch();

  if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: "center"}} size="large"/>
  }

  //Film itemlerimizi MoviesCard'a yönlendiriyoruz.
  const renderMovies = ({item}) => <MoviesCard movies={item}/>
  
  return (
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            horizontal={false}
            data={data}
            renderItem={renderMovies}/>
    </View>
  );
};