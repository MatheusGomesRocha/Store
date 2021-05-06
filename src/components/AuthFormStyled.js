import styled from 'styled-components/native';
import { white, gray50, gray500, gray100, defaultColor } from '../styles';

export const LoginContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const LogoContainer = styled.View`
    background: ${gray50};
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    
`;
export const LogoImg = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`;
export const GoToView = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const GoToText = styled.Text`
    color: ${gray500};
    font-size: 17px;
`;
export const GoToButtonText = styled.Text`
    color: ${defaultColor};
    text-decoration: underline;
    font-size: 17px;
`;

export const SocialLoginContainer = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;
export const SocialLoginButton = styled.TouchableOpacity`
    background: ${props=>props.background || 'transparent'};
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    margin-left: 15px;
`;

export const SeparatorContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 30px 0;
`;
export const SeparatorLine = styled.View`
    background: ${gray100};
    width: 45%;
    height: 2px;
`;
export const SeparatorText = styled.Text`
    color: ${gray500};
    font-size: 16px;
    margin: 0 10px;
`;

export const InputItem = styled.View`
    width: 100%;
    margin-bottom: 25px;
`;
export const LabelInput = styled.Text`
    margin-bottom: 10px;
    font-size: 16px;
`;
export const Input = styled.TextInput`
    background: ${gray100};
    color: #000;
    font-size: 17px;
    height: 64px;
    width: 100%;
    border-radius: 15px;
    padding-left: 10px;
`;
export const InputViewForPassword = styled.View`
    background: ${gray100};
    flex-direction: row;
    align-items: center;
    height: 64px;
    width: 100%;
    border-radius: 15px;
    padding-right: 20px;
`;
export const InputForPassword = styled.TextInput`
    flex: 1;
    color: #000;
    padding-left: 10px;
    font-size: 17px;
`;

export const FooterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const RememberMe = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RememberText = styled.Text`
    font-size: 16px;
`;
export const ForgotPasswordText = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    border-radius: 15px;
    margin-top: 25px;
`;
export const SubmitText = styled.Text`
    color: ${white};
    font-size: 18px;
`;