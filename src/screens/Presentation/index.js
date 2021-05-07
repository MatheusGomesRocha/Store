import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    PresentationContainer,
    Title,
    SmallTitle,
    Img,
    LoginButton,
    LoginButtonText,
    SignUpContainer,
    SignUpText,
    SignUpLink
} from './styles';

export default () => {
    return(
        <PresentationContainer>

            <Title>Your favorite clothing Store now in the palm of your hand</Title>
            <SmallTitle>Formulated according to your wishes</SmallTitle>

            <Img source={require('../../assets/img/shirt2.png')} />

            <LoginButton>
                <LoginButtonText>Login</LoginButtonText>
            </LoginButton>

            <SignUpContainer>
                <SignUpText>Don't have an account?</SignUpText>
                <TouchableOpacity>
                    <SignUpLink>Sign Up</SignUpLink>
                </TouchableOpacity>
            </SignUpContainer>
        </PresentationContainer>
    )
}