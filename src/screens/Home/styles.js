import styled from 'styled-components/native';
import { white, gray100, gray200, gray500, gray800 } from '../../styles';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 15px;
`;
export const DivInputSearch = styled.View`
    flex-direction: row;
    background: ${gray100};
    border-radius: 25px;
    height: 56px;
    padding-left: 15px;
    align-items: center;
    flex: 1;
`;
export const Input = styled.TextInput`
    flex: 1;
    padding-left: 15px;
    color: ${gray800};
`;
export const ButtonNotification = styled.TouchableOpacity`
    background: ${gray100};
    height: 56px;
    width: 56px;
    border-radius: 28px;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
`;
