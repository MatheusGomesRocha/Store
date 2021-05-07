import styled from 'styled-components/native';
import { gray200, white } from '../../styles';

export const PresentationContainer = styled.SafeAreaView`
    background: ${white};
    flex: 1;
    align-items: center;
`;
export const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    margin-top: 30px;
    width: 90%;
`;
export const SmallTitle = styled.Text`
    color: ${gray200};
    margin-top: 10px;
    font-size: 17px;
`;
export const Img = styled.Image`
    width: 400px;
    height: 400px;
`;
export const GetStartedButton = styled.TouchableOpacity`
    background: #000;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 64px;
    border-radius: 15px;
`;
export const GetStartedText = styled.Text`
    color: ${white};
    font-size: 20px;
`;
export const LoginContainer = styled.View`
    flex-direction: row;
    margin: 10px 0 50px 0;
`;
export const LoginText = styled.Text`
    color: ${gray200};
    font-size: 17px;
`;
export const LoginLink = styled.Text`
    font-weight: bold;
    text-decoration: underline;
    font-size: 18px;
    margin-left: 10px;
`;