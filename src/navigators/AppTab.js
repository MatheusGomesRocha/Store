import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import CategoriesScreen from '../screens/Categories';
import ProfileScreen from '../screens/Profile';


const AppTab = createBottomTabNavigator();

export default () => {
    return (
        <AppTab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOption={{
            keyboardHidesTabBar: true
        }}
        >
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="category" component={CategoriesScreen} />
            <AppTab.Screen name="cart" component={CartScreen} />
            <AppTab.Screen name="profile" component={ProfileScreen} />
        </AppTab.Navigator>
    );
}