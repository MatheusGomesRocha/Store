import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox'

import FacebookIcon from '../../assets/svg/facebook.svg';
import GoogleIcon from '../../assets/svg/google-plus.svg';
import GithubIcon from '../../assets/svg/github.svg';
import EyeOnIcon from '../../assets/svg/eye_on.svg';
import EyeOffIcon from '../../assets/svg/eye_off.svg';

import {
    LoginContainer,

    LogoContainer,
    LogoImg,

    Title,
    GoToView,
    GoToText,
    GoToButtonText,

    SocialLoginContainer,
    SocialLoginButton,

    SeparatorContainer,
    SeparatorLine,
    SeparatorText,

    InputItem,
    LabelInput,
    Input,
    InputViewForPassword,
    InputForPassword,

    FooterContainer,
    RememberMe,
    RememberText,

    ForgotPasswordText,

    SubmitButton,
    SubmitText
} from './styles';

export default() => {
    const [securePassword, setSecurePassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    return(
        <LoginContainer>
            <LogoContainer>
                <LogoImg source={require("../../assets/img/logo.png")} />
            </LogoContainer>

            <Title>Login in to Store</Title>
            <GoToView>
                <GoToText>Don't have an account? </GoToText>
                <TouchableOpacity>
                    <GoToButtonText>Sign Up</GoToButtonText>
                </TouchableOpacity>
            </GoToView>

            <SocialLoginContainer>
                <SocialLoginButton background="#3b5998">
                    <FacebookIcon fill="#fff" width={25} height={25} />
                </SocialLoginButton>

                <SocialLoginButton background="#db4a39">
                    <GoogleIcon fill="#fff" width={25} height={25} />
                </SocialLoginButton>

                <SocialLoginButton background="#000">
                    <GithubIcon fill="#fff" width={25} height={25} />
                </SocialLoginButton>
            </SocialLoginContainer>

            <SeparatorContainer>
                <SeparatorLine />
                <SeparatorText>Or</SeparatorText>
                <SeparatorLine />
            </SeparatorContainer>

            <InputItem>
                <LabelInput>Email</LabelInput>
                <Input />
            </InputItem>

            <InputItem>
                <LabelInput>Password</LabelInput>
                <InputViewForPassword>
                    <InputForPassword secureTextEntry={securePassword} />
                    <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
                        {securePassword == true ? 
                            <EyeOffIcon fill="#808080" width={25} height={25} /> 
                            : 
                            <EyeOnIcon fill="#808080" width={25} height={25} />
                        }
                    </TouchableOpacity>
                </InputViewForPassword>
            </InputItem>

            <FooterContainer>
                <RememberMe>
                        <CheckBox
                            value={rememberMe}
                            onValueChange={() => setRememberMe(!rememberMe)}
                            tintColors={true}
                        />
                    <RememberText>Remember me</RememberText>
                </RememberMe>

                <TouchableOpacity>
                    <ForgotPasswordText>Forgot password?</ForgotPasswordText>
                </TouchableOpacity>
            </FooterContainer>

            <SubmitButton>
                <SubmitText>Login</SubmitText>
            </SubmitButton>
        </LoginContainer>
    )
}

