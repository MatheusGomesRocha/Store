import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

import PayIcon from '../../assets/svg/pay.svg';
import DeliveryIcon from '../../assets/svg/delivery.svg';

import {
    PresentationContainer,
    Title,
    SmallTitle,
    Img,
    GetStartedButton,
    GetStartedText,
    LoginContainer,
    LoginText,
    LoginLink
} from './styles';

export default () => {
    const navigation = useNavigation();

    const PreparationComponent1 = () => {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Title>Your favorite clothing Store now in the palm of your hand</Title>
                <SmallTitle>Formulated according to your wishes</SmallTitle>

                <Img source={require('../../assets/img/shirt2.png')} />
            </View>
        )
    }

    const PreparationComponent2 = () => {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Title style={{fontSize: 22}}>All payments methods available, never was been so easy to buy your favorites clothes</Title>

                <PayIcon style={{marginTop: 40}} width={350} height={350} />
            </View>
        )
    }

    const PreparationComponent3 = () => {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Title>Delivery it directly on your home, with all safety taken due to COVID-19</Title>

                <DeliveryIcon width={350} height={400} />
            </View>
        )
    }

    return(
        <PresentationContainer>

            <Swiper
                style={{backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}
                dot={
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        width: 10,
                        height: 10,
                        borderRadius: 20,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                      }}
                    />
                }
                activeDot={
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: 30,
                        height: 10,
                        borderRadius: 10,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                      }}
                    />
                }
            >
                <PreparationComponent1 />
                <PreparationComponent2 />
                <PreparationComponent3 />
            </Swiper>

            <GetStartedButton onPress={() => navigation.navigate('apptab')}>
                <GetStartedText>Get Started</GetStartedText>
            </GetStartedButton>
                
            <LoginContainer>
                <LoginText>Already have an account?</LoginText>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <LoginLink>Login</LoginLink>
                </TouchableOpacity>
            </LoginContainer>

        </PresentationContainer>
    )
}