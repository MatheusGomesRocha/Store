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
    padding: 10px 20px 0 20px;
    border-top-left-radius:  50px;
    border-top-right-radius: 50px;
    margin-top: -250px;
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
export const PriceValue = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const SizeAndColorArea = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;
export const SizeArea = styled.View`
`;
export const SizeText = styled.Text`
    color: ${gray500};
    font-size: 17px;
    margin-bottom: 20px;
`;
export const SizeOption = styled.TouchableOpacity`
    background: ${props=>props.background || 'transparent'};
    border: ${props=>props.border || '1px solid #afb2b1'};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 15px;
`;
export const SizeOptionText = styled.Text`
    color: ${props=>props.color || '#afb2b1'};
    font-weight: bold;
`;
export const ColorArea = styled.View`
    margin-left: auto;
`;
export const ColorOption = styled.TouchableOpacity`
    background: ${props=>props.background};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-top: 10px;
`;
export const ColorOptionIcon = styled.View`
    background: #000;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    opacity: ${props=>props.opacity || 0};
`;

export const FooterArea = styled.View``;
export const DetailsAndReviewButton = styled.View``;
export const DefaultButton = styled.TouchableOpacity``;
export const DefaultButtonText = styled.Text``;
export const DetailsArea = styled.View``;
export const DetailsDescription = styled.Text``;

export const AddToCartButton = styled.TouchableOpacity``;
export const AddToCartText = styled.Text``;
