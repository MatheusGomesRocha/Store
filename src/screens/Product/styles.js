import styled from 'styled-components/native';
import {white, gray100, gray200, gray500, gray800, defaultColor} from '../../styles';

export const ProductContainer = styled.SafeAreaView`
    background: ${white};
    flex: 1;
`;

export const HeaderArea = styled.ImageBackground`
    height: 320px;
`;
export const RowButtons = styled.View``;
export const RowDefaultButton = styled.TouchableOpacity``;


export const InfoArea = styled.View`
    flex: 1;
    background: ${white};
    border: 1px solid ${gray200};
    padding: 10px 20px 0 20px;
    border-top-left-radius:  50px;
    border-top-right-radius: 50px;
    margin-top: -150px;
    border-bottom-width: 0;
`;
export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const InfoHeaderText = styled.Text`
    color: ${gray800};
    font-weight: bold;
    font-size: 17px;
`;
export const InfoDescription = styled.Text`
    color: ${gray500};
    margin-top: 15px;
    font-size: 15px;
`;
export const RateAndPriceArea = styled.View``;
export const RateArea = styled.View``;
export const RateValue = styled.Text``;
export const RateQuantity = styled.Text``;
export const PriceArea = styled.View``;
export const PriceValue = styled.Text``;
export const PriceOlderValue = styled.Text``;
export const InfoSelect = styled.View`
    margin-top: 20px;
`;
export const InfoSelectTitle = styled.Text`
    color: ${gray800};
    font-weight: bold;
    font-size: 16px;
`;
export const InfoSelectOptions = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;
export const InfoOptionForSelection = styled.TouchableOpacity`
    background: ${props=>props.background || gray100};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;
`;
export const InfoOptionSelected = styled.View`
    background: #000;
    opacity: ${props=>props.opacity};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid ${white};
`;
export const InfoOptionForSelectionText = styled.Text`
    color: ${props=>props.color || gray800};
    font-weight: bold;
    font-size: 17px;
`;
export const WhatToDo = styled.View`
    background: #000;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    height: 100px;
    width: 100%;
    margin-top: 25px;
`;
export const SelectQuantity = styled.View`
    background: rgba(255, 255, 255, 0.2);
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 50px;
    border-radius: 60px;
`;
export const SelectQuantityValue = styled.Text`
    color: ${white};
    font-size: 22px;
`;
export const BuyNowButton = styled.TouchableOpacity`
    background: ${defaultColor};
    height: 60px;
    width: 150px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;
export const BuyNowText = styled.Text`
    color: ${white};
    font-size: 15px;
`;
export const AddToCartButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    border: 1px solid ${defaultColor};
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
export const AddToCartText = styled.Text`
    color: ${white};
    font-size: 17px;
    margin-left: 15px;
`;

                