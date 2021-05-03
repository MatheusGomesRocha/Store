import styled from 'styled-components/native';
import {white, gray500, gray800, defaultColor, gray200, gray100} from '../../styles';

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
    padding: 30px;
    border-top-left-radius:  50px;
    border-top-right-radius: 50px;
    margin-top: -40px;
    background: ${white};
    flex: 1;
`;
export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const InfoHeaderText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${gray800};
`;
export const InfoDescription = styled.Text`
    margin-top: 15px;
    font-size: 15px;
    color: ${gray500};
`;
export const InfoSelect = styled.View`
    margin-top: 25px;
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
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${props=>props.background || gray100};
    margin-right: 10px;
    align-items: center;
    justify-content: center;
`;
export const InfoOptionForSelectionText = styled.Text`
    color: ${props=>props.color || gray800};
    font-size: 17px;
    font-weight: bold;
`;
export const AddToCartButton = styled.TouchableOpacity`
    background: #000;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 62px;
    border-radius: 10px;
    margin-top: auto;
`;
export const AddToCartText = styled.Text`
    color: ${white};
    font-size: 17px;
    margin-left: 15px;
`;

                