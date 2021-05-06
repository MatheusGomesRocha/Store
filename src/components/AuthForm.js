import React, { useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox'

import FacebookIcon from '../assets/svg/facebook.svg';
import GoogleIcon from '../assets/svg/google-plus.svg';
import GithubIcon from '../assets/svg/github.svg';
import EyeOnIcon from '../assets/svg/eye_on.svg';
import EyeOffIcon from '../assets/svg/eye_off.svg';

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
} from './AuthFormStyled';

export default (props) => {
    const [securePassword, setSecurePassword] = useState(true);
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const navigation = useNavigation();

    return(
        <LoginContainer>
            <ScrollView contentContainerStyle={{paddingHorizontal: 30, paddingVertical: 20, alignItems: 'center'}}>
                <LogoContainer>
                    <LogoImg source={require("../assets/img/logo.png")} />
                </LogoContainer>

                <Title>{props.login ? 'Login in to Store' : 'Create a account'}</Title>
                <GoToView>
                    <GoToText>{props.login ? "Don't have an account? " : 'Already have an account? '}</GoToText>
                    <TouchableOpacity onPress={props.login ? () => navigation.navigate('register') : () => navigation.navigate('login')}>
                        <GoToButtonText>{props.login ? 'Sign Up' : 'Login'}</GoToButtonText>
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

                {props.register &&
                    <InputItem>
                        <LabelInput>Nome</LabelInput>
                        <Input />
                    </InputItem>
                }

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
                
                {props.register &&
                    <InputItem>
                        <LabelInput>Confirm Password</LabelInput>
                        <InputViewForPassword>
                            <InputForPassword secureTextEntry={secureConfirmPassword} />
                            <TouchableOpacity onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}>
                                {secureConfirmPassword == true ? 
                                    <EyeOffIcon fill="#808080" width={25} height={25} /> 
                                    : 
                                    <EyeOnIcon fill="#808080" width={25} height={25} />
                                }
                            </TouchableOpacity>
                        </InputViewForPassword>
                    </InputItem>
                }

                {props.login &&
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
                }

                <SubmitButton>
                    <SubmitText>{props.login ? 'Login' : 'Create account'}</SubmitText>
                </SubmitButton>
            </ScrollView>
        </LoginContainer>
    )
}

