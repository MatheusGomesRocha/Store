import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';

function App() {
  return(
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  )
}

export default App;
