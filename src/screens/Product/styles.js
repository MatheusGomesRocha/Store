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
    border: ${props=>props.border || '1px solid #e6e8eb'};      /** gray100 */
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 15px;
`;
export const SizeOptionText = styled.Text`
    color: ${props=>props.color || '#afb2b1'};          /** gray200 */
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
    opacity: ${props=>props.opacity || 0};
    background: #000;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 10px;
`;

export const FooterArea = styled.View`
    margin-top: 30px;
`;
export const DetailsAndReviewButton = styled.View`
    flex-direction: row;
`;
export const DefaultButton = styled.TouchableOpacity`
    border-bottom-color: ${props=>props.borderColor || 'transparent'};
    border-bottom-width: 2px;
    margin-right: 20px;
    width: 100px;
`;
export const DefaultButtonText = styled.Text`
    color: ${props=>props.color || '#afb2b1'};
    text-align: center;
    font-size: 17px;
    margin-bottom: 5px;
`;
export const DetailsDescription = styled.Text`
    color: ${gray500};
    margin-top: 15px;
    font-size: 17px;
    line-height: 25px;
`;

export const AddToCartButton = styled.TouchableOpacity`
    background: ${defaultColor};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 64px;
    margin-top: 15px;
    border-radius: 10px;
`;
export const AddToCartText = styled.Text`
    color: ${white};
    margin-left: 15px;
    font-size: 20px;
`;
