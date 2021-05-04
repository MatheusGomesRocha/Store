import styled from 'styled-components/native';
import {white, gray100, gray200, gray500, gray800, defaultColor} from '../../styles';

export const ProductContainer = styled.SafeAreaView`
    background: ${white};
    flex: 1;
`;

export const HeaderArea = styled.ImageBackground`
    height: 345px;
`;


export const InfoArea = styled.View`
    flex: 1;
    background: ${white};
    border: 1px solid ${gray200};
    padding: 10px 20px 0 20px;
    border-top-left-radius:  50px;
    border-top-right-radius: 50px;
    margin-top: -200px;
    border-bottom-width: 0;
`;
export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const InfoHeaderText = styled.Text`
    color: ${gray800};
    font-size: 25px;
`;
export const InfoDescription = styled.Text`
    color: ${gray200};
    margin-top: 10px;
    font-size: 15px;
`;
export const RateAndPriceArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${gray100};
`;
export const RateArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RateValue = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-left: 5px;
`;
export const RateQuantity = styled.Text`
    color: ${gray200};
    margin-left: 3px;
`;
export const PriceArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const PriceValue = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-right: 5px;
`;
export const PriceOlderValue = styled.Text`
    text-decoration: line-through;
    color: ${gray200};
`;
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
export const RowButtons = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;
export const SaveProductButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    border: 1px solid ${defaultColor};
    width: 60px;
    height: 60px;
    border-radius: 15px;
`;
export const AddToCartButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 15px;
    border-radius: 15px;
`;
export const AddToCartText = styled.Text`
    color: ${white};
    font-size: 20px;
`;

                