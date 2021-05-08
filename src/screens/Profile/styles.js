import styled from 'styled-components/native';
import {white, gray100, gray200, gray50} from '../../styles';

export const ProfileContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
    padding: 0 20px;
`;

export const ProfileTitle = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 50px;
`;
export const ProfileSmallerTitle = styled.Text`
    font-size: 22px;
    margin-bottom: 15px;
`;

export const ProfileItemContainer = styled.View`
    width: 100%;
    margin-top: 50px;
`;
export const ProfileItem = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-color: ${gray50};
    border-bottom-width: 1px;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;
`;
export const ProfileItemImgContainer = styled.View`
    background: ${props=>props.background || gray100};
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-right: 15px;
`;
export const ProfileItemImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;
export const ProfileItemInfo = styled.View`
`;
export const ProfileItemTitle = styled.Text`
    font-size: 18px;
`;
export const ProfileItemFlexEnd = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: auto;
`;
export const ProfileItemSmallerTitle = styled.Text`
    color: ${gray200};
    font-size: 16px;
`;
export const ProfileItemButton = styled.TouchableOpacity`
    background: ${gray100};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 15px;
    margin-left: auto;
`;