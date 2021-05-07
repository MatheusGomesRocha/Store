import styled from 'styled-components/native';
import { defaultColor, gray100, gray200, gray500, white } from '../../styles';

export const PresentationContainer = styled.SafeAreaView`
    background: ${white};
    flex: 1;
    align-items: center;
    padding: 20px;
`;
export const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 28px;
`;
export const SmallTitle = styled.Text`
    margin-top: 15px;
    color: ${gray200};
`;
export const Img = styled.Image`
    width: 450px;
    height: 450px;
    margin-top: 20px;
`;
export const LoginButton = styled.TouchableOpacity`
    background: #000;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    width: 100%;
    height: 64px;
    border-radius: 15px;
`;
export const LoginButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
`;
export const SignUpContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;
export const SignUpText = styled.Text`
    color: ${gray200};
    font-size: 17px;
`;
export const SignUpLink = styled.Text`
    font-weight: bold;
    text-decoration: underline;
    font-size: 18px;
    margin-left: 10px;
`;