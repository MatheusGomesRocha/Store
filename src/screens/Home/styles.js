import styled from 'styled-components/native';
import { white, gray50, gray800, defaultColor } from '../../styles';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 15px 10px 15px;
`;
export const DivInputSearch = styled.View`
    flex-direction: row;
    background: ${gray50};
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
    background: ${gray50};
    height: 56px;
    width: 56px;
    border-radius: 28px;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
`;

export const PromotionArea = styled.View`
    margin: 10px 15px;
    background: ${defaultColor};
    border-radius: 10px;
    height: 180px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5px 0 15px;
`;
export const PromotionInsideLeft = styled.View`
    margin: 20px 0;
    width: 55%;
`;
export const PromotionText = styled.Text`
    color: ${white};
    font-size: 25px;
    margin-top: 1px;
`;
export const PromotionImg = styled.Image`
    height: 180px;
    width: 180px;
`;