import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default ({ state, descriptors, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <SafeAreaView>
            <View key={index} onPress={() => goTo('home')}>
                <>
                    <Text color={state.index == 1 && '#E54F6D'}>hOME</Text>
                </>
            </View>

            <View key={index} onPress={() => goTo('categories')}>
                <>
                    <Text color={state.index == 1 && '#E54F6D'}>Wallet</Text>
                </>
            </View>

        

            <View key={index} onPress={() => goTo('cart')}>
                <>
                    <Text color={state.index == 3 && '#E54F6D'}>Notification</Text>
                </>
            </View>

            <View key={index} onPress={() => goTo('profile')}>
                <>
                    <Text color={state.index == 4 && '#E54F6D'}>Config</Text>
                </>
            </View>
        </SafeAreaView>
    );
}