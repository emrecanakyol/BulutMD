import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './Movies.style';
import { SelectList } from 'react-native-dropdown-select-list';

//Filmler ekranında datamızı Custom Hook yapımızla çekiyoruz.
import useFetch from '../../components/Hooks/useFetch';

//Film datalarımızın tasarımlarını Card sayfamızda oluşturuyoruz.
import MoviesCard from '../../components/Card/MoviesCard';

//Dropdown'da sıralama yapmak için kullancağımız değerleri yazıyoruz ve değerleri datamıza göre sıralayacağı işlemleri ayarlıyoruz.
const SORT_TYPES = ['Varsayılan', 'Yeniye Göre Sırala', 'Eskiye Göre Sırala', 'Rastgele Sırala'];
const SORT_FUNCTIONS = {
  'Eskiye Göre Sırala': (a, b) => a.releaseYear - b.releaseYear,
  'Yeniye Göre Sırala': (b, a) => a.releaseYear - b.releaseYear,
  'Rastgele Sırala': () => Math.random(),
};

export default Movies = () => {
  const { data, loading } = useFetch();
  const [list, setList] = useState(data);
  const [sortType, setSortType] = useState(SORT_TYPES[0]);

  //Tüm veri üzerinde Dropdown için sıralamayı ayarlıyoruz.
  const handleSort = useCallback(() => {
    if (!data) return;
    if (sortType == 'Varsayılan') setList(data);
    const sortFunction = SORT_FUNCTIONS[sortType]
    setList((prev) => {
      const newList = [...prev];
      return newList.sort(sortFunction);
    });
  }, [data, sortType]);

  //Diğer datalar güncellendiğinde veri başlangıç değeri null / undefined olacaktır.
  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  if (loading) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" />
  }

  //Film itemlerimizi MoviesCard'a yönlendiriyoruz.
  const renderMovies = ({ item }) => <MoviesCard movies={item} />

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        horizontal={false}
        //Datamızda ilk 18 veriyi görüntülüyoruz.
        data={list.slice(0, 18)}
        renderItem={renderMovies}
        ListHeaderComponent={
          <SelectList
            onSelect={handleSort}
            setSelected={setSortType}
            data={SORT_TYPES}
            search={false}
            placeholder="Sırala"
            boxStyles={styles.dropDown}
            dropdownStyles={styles.dropDown}
          />
        } />
    </View>
  );
};