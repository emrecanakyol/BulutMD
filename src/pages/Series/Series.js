import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import styles from './Series.style';

//Diziler ekranında datamızı Custom Hook yapımızla çekiyoruz.
import useFetch from '../../components/Hooks/useFetch';

export default Series = () => {
  const {data, loading} = useFetch();

  if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: "center"}} size="large"/>
  }

  const renderMovies = ({item}) => <Text style={{color: 'white'}}>{item.title}</Text>
  
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