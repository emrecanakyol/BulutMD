import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Sayfaları Stack ile çağırıyoruz.
import PopulerTitles from './pages/PopulerTitles';
import Movies from './pages/Movies';
import Series from './pages/Series';

//Custom Headerımızı çağırıyoruz.
import Header from './components/Header';

//SearchBarımızı çağırıyoruz.
import SearchBar from './pages/SearchBar';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: Header, cardStyle: { backgroundColor: 'black' }}}>
        <Stack.Screen name='PopulerTitles' component={PopulerTitles}/>
        <Stack.Screen name='Movies' component={Movies}/>
        <Stack.Screen name='Series' component={Series}/>
        <Stack.Screen name='SearchBar' component={SearchBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;