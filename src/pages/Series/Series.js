import React from 'react';
import { View, FlatList, ActivityIndicator} from 'react-native';
import styles from './Series.style';

//Diziler ekranında datamızı Custom Hook yapımızla çekiyoruz.
import useFetch from '../../components/Hooks/useFetch';

//Dizi datalarımızın tasarımlarını Card sayfamızda oluşturuyoruz.
import SeriesCard from '../../components/Card/SeriesCard';

export default Series = () => {
  const {data, loading} = useFetch();

  if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: "center"}} size="large"/>
  }

  //Dizi itemlerimizi SeriesCard'a yönlendiriyoruz.
  const renderMovies = ({item}) => <SeriesCard series={item}/>
  
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