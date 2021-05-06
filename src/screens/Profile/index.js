import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity style={{margin: 30}} onPress={() => navigation.navigate('login')}>
                <Text style={{fontSize: 25}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}