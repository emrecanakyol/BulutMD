import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Sayfaları Stack ile çağırıyoruz.
import PopulerTitles from './pages/PopulerTitles';
import Movies from './pages/Movies';
import Series from './pages/Series';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='PopulerTitles' component={PopulerTitles}/>
        <Stack.Screen name='Movies' component={Movies}/>
        <Stack.Screen name='Series' component={Series}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;