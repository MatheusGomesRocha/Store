import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';
import { StatusBar } from 'react-native';

function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#f7f8fa' />
      <AppTab />
    </NavigationContainer>
  )
}

export default App;
