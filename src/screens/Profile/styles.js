import styled from 'styled-components/native';
import {white, gray100} from '../../styles';

export const ProfileContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const ProfileTitle = styled.Text``;
export const ProfileSmallerTitle = styled.Text``;

export const ProfileItemContainer = styled.View``;
export const ProfileItem = styled.View``;
export const ProfileItemImgContainer = styled.View`
    background: ${props=>props.background || gray100};
`;
export const ProfileItemImg = styled.Image``;
export const ProfileItemInfo = styled.View``;
export const ProfileItemTitle = styled.Text``;
export const ProfileItemSmallerTitle = styled.Text``;
export const ProfileItemButton = styled.TouchableOpacity``;