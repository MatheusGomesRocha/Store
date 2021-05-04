import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import ProductStack from './ProductStack';
import CartScreen from '../screens/Cart';
import CategoriesScreen from '../screens/Categories';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';

const AppTab = createBottomTabNavigator();

export default () => {
    return (
        <AppTab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOptions={{
            keyboardHidesTabBar: true,
            backgroundColor: 'transparent',
        }}
        >
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="cart" component={CartScreen} />
            <AppTab.Screen name="categories" component={CategoriesScreen} />
            <AppTab.Screen name="profile" component={ProfileScreen} />
        </AppTab.Navigator>
    );
}