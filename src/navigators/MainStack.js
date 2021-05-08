import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/Product';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import PresentationScreen from '../screens/Presentation';
import AccountScreen from '../screens/Account';
import AppTab from './AppTab';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="presentation">
            <MainStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true}}/>
            <MainStack.Screen name="login" component={LoginScreen} options={{headerTitle: null, headerTransparent: true}}/>
            <MainStack.Screen name="register" component={RegisterScreen} options={{headerTitle: null, headerTransparent: true}}/>
            <MainStack.Screen name="presentation" component={PresentationScreen} options={{headerTitle: null, headerTransparent: true}}/>
            <MainStack.Screen name="account" component={AccountScreen} options={{headerTitle: null, headerTransparent: true}}/>
        </MainStack.Navigator>
    )
}