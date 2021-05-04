import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Product';
import AppTab from './AppTab';

const ProductStack = createStackNavigator();

export default () => {

    return(
        <ProductStack.Navigator>
            <ProductStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <ProductStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true}}/>
        </ProductStack.Navigator>
    )
}