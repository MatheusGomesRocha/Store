import styled from 'styled-components/native';
import { gray200, gray800, white, defaultColor, gray100, gray50, lightDefaultColor } from '../../styles';

export const CartContainer = styled.SafeAreaView`
    flex: 1;
    background: ${gray50};
`;

export const EmptyCartArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
`;
export const EmptyCartTitle = styled.Text`
    font-weight: bold;
    color: ${gray800};
    margin-top: 25px;
    font-size: 25px;
`;
export const EmptyCartText = styled.Text`
    color: ${gray200};
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
`;
export const EmptyCartButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100%;
    margin-top: 100px;
    border-radius: 50px;
`;
export const EmptyCartButtonText = styled.Text`
    color: ${white};
    font-size: 17px;
`;


export const CartArea = styled.View`
    background: ${white};
    flex-direction: row;
    align-items: center;
    height: 170px;
    border-radius: 15px;
    margin: 20px 20px 0 20px;
    padding: 0 15px;
`;
export const CartTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`;
export const CartLeftColumn = styled.View`
`;
export const CartProductImgContainer = styled.View`
    background: ${gray50};
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 15px;
`;
export const CartProductImg = styled.Image`
    width: 100px;
    height: 100px;
`;
export const SaveButton = styled.TouchableOpacity`
`;
export const SaveText = styled.Text`
    color: ${defaultColor};
    text-decoration: underline;
    margin-top: 5px;
    text-align: center;
`;

export const CartProductInfo = styled.View`
    margin-left: 10px;
`;
export const CartProductName = styled.Text`
    color: ${gray800};
    font-size: 17px;
    width: 200px;
`;
export const CartProductPrice = styled.Text`
    font-weight: bold;
    color: ${gray800};
    margin-bottom: 10px;
`;
export const CartProductSizeAndColorText = styled.Text`
    color: ${gray200};
`;

export const CartQuantity = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;
export const CartQuantityButton = styled.TouchableOpacity`
    background: ${gray100};
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 20px;
`;
export const CartQuantityValue = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin: 0 10px;
`;

export const CartDeleteButton = styled.TouchableOpacity`
    background: #FCEDEA;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
`;

export const BuyNowArea = styled.View`
    background: ${white};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 125px;
    border: 1px solid ${gray100};
`;
export const BuyNowHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0 20px;
`;
export const SubtotalText = styled.Text`
    color: ${gray200};
    font-size: 16px;
`;
export const SubtotalValue = styled.Text`
    font-weight: bold;
    color: ${gray800};
    font-size: 18px;
`;
export const BuyNowButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 64px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
export const BuyNowText = styled.Text`
    color: ${white};
    font-size: 20px;
`;