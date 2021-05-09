import styled from 'styled-components/native';
import { defaultColor, gray100, gray200, gray50, gray500, white } from '../../styles';

export const PaymentContainer = styled.SafeAreaView`
    flex: 1;
    background: ${gray50};
`;
export const PaymentTitle = styled.Text`
    font-weight: bold;
    font-size: 28px;
`;
export const PaymentSmallerTitle = styled.Text`
    color: ${gray200};
    font-size: 16px;
    margin-top: 5px;
`;

export const PaymentItemContainer = styled.View`
    background: ${white};
    width: 100%;
    border-radius: 10px;
    margin-top: 50px;
    padding: 20px;
`;
export const PaymentItemTitle = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
`;
export const PaymentItemButtonArea = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;
export const PaymentItemButton = styled.TouchableOpacity`
    background: ${props=>props.background || gray50};
    border-width: ${props=>props.borderW || 0};
    border-color: ${props=>props.borderC || 'transparent'};
    align-items: center;
    justify-content: center;
    min-width: 100px;
    height: 60px;
    border-radius: 10px;
    margin-right: 20px;
    padding: 0 10px;
`;
export const PaymentItemButtonText = styled.Text`
`;

export const PaymentItemDetailsArea = styled.View`
    margin-top: 30px;
`;
export const PaymentItemInputArea = styled.View`
    margin-top: 15px;
`;
export const PaymentItemLabel = styled.Text`
    color: ${gray200};
    font-size: 16px;
`;
export const PaymentItemInput = styled.TextInput`
    color: #000;
    border-bottom-color: ${gray200};
    border-bottom-width: 1px;
    font-size: 16px;
`;
export const PaymentItemInputAreaRow = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const PaymentInfoContainer = styled.View`
    background: ${defaultColor};
    width: 100%;
    margin-top: 50px;
    border-radius: 10px;
`;
export const PaymentInfoHeader = styled.View`
    padding: 50px 30px;
    border-width: 1px;
    border-color: ${white};
    border-style: dashed;
    border-radius: 1px;
`;
export const PaymentInfoTitle = styled.Text`
    color: ${gray100};
    font-size: 20px;
`;
export const PaymentInfoPrice = styled.Text`
    font-weight: bold;
    color: ${white};
    font-size: 25px;
    margin-top: 5px;
`;
export const PaymentInfoBlock = styled.View`
    padding: 30px;
`;
export const PaymentInfoBlockLabel = styled.Text`
    color: #cecece;
`;
export const PaymentInfoBlockText = styled.Text`
    color: ${white};
    font-weight: bold;
    font-size: 18px;
    margin-top: 5px;
`;

export const PaymentPayButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    margin-top: 30px;
`;
export const PaymentPayButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;

