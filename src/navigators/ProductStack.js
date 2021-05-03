import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Product';

const ProductStack = createStackNavigator();

export default () => {

    return(
        <ProductStack.Navigator>
            <ProductStack.Screen name="home" component={HomeScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <ProductStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true}}/>
        </ProductStack.Navigator>
    )
}