import styled from 'styled-components/native';
import { white, gray50, gray100, gray200, gray500, gray800, defaultColor } from '../../styles';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;


export const Header = styled.View`
    flex-direction: row;
    margin: 20px 15px 40px 0;
`;
export const HeaderButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid ${gray100};
    border-radius: 30px;
    margin-left: 15px;
`;

export const FilterArea = styled.View`
    flex-direction: row;
    margin: 0 15px 0 5px;
`;
export const FilterItem = styled.TouchableOpacity`
    background: ${props=>props.background || gray100};
    align-items: center;
    justify-content: center; 
    min-width: 60px;
    height: 40px;
    margin-left: 10px;
    border-radius: 15px;
    padding: 0 20px;
`;
export const FilterText = styled.Text`
    color: ${props=>props.color || gray500};
    font-size: 16px;
`;

export const ProductsArea = styled.View`
    margin-top: 30px;
`;
export const ProductsHeader = styled.View`
    margin: 0 15px;
`;
export const ProductsHeaderRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px;
`;
export const ProductsTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const ProductsSmallTitle = styled.Text`
    color: ${gray200};
`;
export const ProductsSeeAll = styled.TouchableOpacity``;
export const ProductsSeeAllText = styled.Text`
    color: ${gray200};
    font-size: 16px;
`;
export const ProductsItem = styled.TouchableOpacity`
    margin: 15px;
`;
export const ProductsImgContainer = styled.View`
    background: ${gray50};
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 220px;
    border-radius: 15px;
`;
export const ProductsImg = styled.Image`
    width: 200px;
    height: 200px;
`;
export const ProductsFavoriteButton = styled.TouchableOpacity`
    background: #000;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;
export const ProductsInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;                        
    margin-top: 10px;
`;
export const ProductsName = styled.Text`
    color: ${gray800};
    font-size: 16px;
    width: 120px;
`;
export const ProductsPrice = styled.Text`
    font-weight: bold;
    color: ${gray800};
`;