import styled from 'styled-components/native';
import {white, gray100, gray200, gray500, gray800} from '../../styles';

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
    padding: 30px;
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
export const AddToCartButton = styled.TouchableOpacity`
    background: #000;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 62px;
    border-radius: 10px;
`;
export const AddToCartText = styled.Text`
    color: ${white};
    font-size: 17px;
    margin-left: 15px;
`;

                