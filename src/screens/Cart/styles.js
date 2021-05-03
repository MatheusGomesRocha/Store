import styled from 'styled-components/native';
import { gray200, gray800, white, defaultColor } from '../../styles';

export const CartContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const EmptyCartArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
`;
export const EmptyCartTitle = styled.Text`
    margin-top: 25px;
    font-size: 25px;
    font-weight: bold;
    color: ${gray800};
`;
export const EmptyCartText = styled.Text`
    color: ${gray200};
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
`;
export const EmptyCartButton = styled.TouchableOpacity`
    height: 64px;
    background: ${defaultColor};
    width: 100%;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;
export const EmptyCartButtonText = styled.Text`
    color: ${white};
    font-size: 17px;
`;