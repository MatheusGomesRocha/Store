import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/Product';
import LoginScreen from '../screens/Login';
import AppTab from './AppTab';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true}}/>
            <MainStack.Screen name="login" component={LoginScreen} options={{headerTitle: null, headerTransparent: true}}/>
        </MainStack.Navigator>
    )
}