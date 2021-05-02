import styled from 'styled-components/native';
import { white, gray50, gray100, gray200, gray800, defaultColor } from '../../styles';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${gray50};
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 15px 10px 15px;
`;
export const DivInputSearch = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background: ${white};
    border-radius: 25px;
    height: 56px;
    padding-left: 15px;
`;
export const Input = styled.TextInput`
    color: ${gray800};
    flex: 1;
    padding-left: 15px;
`;
export const ButtonNotification = styled.TouchableOpacity`
    background: ${white};
    border: 1px solid ${gray100};
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    border-radius: 28px;
    margin-left: 15px;
`;


export const PromotionArea = styled.View`
    background: ${defaultColor};
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 15px;
    border-radius: 20px;
    height: 180px;
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


export const FlashSaleArea = styled.View`
`;
export const FlashSaleHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 15px;
`;
export const FlashSaleTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;
export const FlashSaleClosingIn = styled.View`
    flex-direction: row;
`;
export const FlashSaleClosingInText = styled.Text`
    color: ${gray200};
`;
export const FlashSaleCount = styled.View`
    background: ${gray100};
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
`;
export const FlashSaleTime = styled.Text`
    font-weight: bold;
`;
export const FlashSaleScroll = styled.ScrollView`
`;
export const FlashSaleItem = styled.TouchableOpacity`
    background: ${white};
    align-items: center;
    position: relative;
    width: 150px;
    height: 220px;
    margin: 0 10px;
    border-radius: 15px;
`;
export const FlashSaleImgView = styled.View`
    align-items: center;
    justify-content: center;
    background: ${gray100};
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin-top: 55px;

`;
export const FlashSaleImg = styled.Image`
    width: 90px;
    height: 90px;
`;
export const FlashSaleName = styled.Text`
    text-align: left;
    margin-top: 10px;
    font-size: 16px;
    height: 27px;
    width: 100%;
    margin-left: 25px;
`;
export const FlashSalePrice = styled.Text`
    font-weight: bold;
    text-align: left;
    font-size: 16px;
    width: 100%;
    margin-left: 25px;
`;
export const FlashSaleDiscountView = styled.View`
    position: absolute;
    top: 10px;
    left: 10px;
    border: 1px solid ${defaultColor};
    border-radius: 20px;
    padding: 3px 5px;
`;
export const FlashSaleDiscountText = styled.Text`
    color: ${defaultColor};
`;