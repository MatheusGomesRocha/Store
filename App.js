import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';
import ProductStack from './src/navigators/ProductStack';
import { StatusBar } from 'react-native';

function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <ProductStack />
    </NavigationContainer>
  )
}

export default App;
