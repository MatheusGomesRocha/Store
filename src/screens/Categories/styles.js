import styled from 'styled-components/native';

import {white, gray100} from '../../styles';

export const CategoryContainer = styled.SafeAreaView`
    background: ${white};
    flex: 1;
`;
export const CategoryTitle = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 22px;
    width: 100%;
    margin: 20px 0;
`;
export const CategoryItem = styled.TouchableOpacity`
    background: ${gray100};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    border-radius: 10px;
    height: 220px; 
    padding: 0 20px;
`;
export const CategoryItemTitle = styled.Text`
    font-weight: bold;
    font-size: 25px;
    width: 50%;
`;
export const CategoryImg = styled.Image`
    height: 220px;
    width: 200px;
`;