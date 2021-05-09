import styled from 'styled-components/native';
import { defaultColor, gray100, gray200, white } from '../../styles';

export const AccountContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const AccountConfirmButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin: -30px -20px 0 0;
    width: 50px;
    height: 50px;
    border-radius: 15px;
`;

export const AccountTitle = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin: 20px 0;
`;

export const AccountItem = styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-top: 50px;
`
export const AccountItemTitle = styled.Text`
    color: ${gray200};
    width: 90px;
    font-size: 17px;
`;

export const AccountItemPhotoContainer = styled.View`
`;
export const AccountItemImgContainer = styled.View`
    background: ${gray100};
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;
export const AccountItemImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;
export const AccountItemImgUpload = styled.Text`
    color: ${defaultColor};
    font-size: 16px;
`;

export const AccountItemInput = styled.TextInput`
    color: #000;
    border-bottom-color: ${gray100};
    border-bottom-width: 1px;
    width: 80%;
    font-size: 16px;
`;

export const AccountItemGenderButton = styled.TouchableOpacity`
    background: ${props=>props.background || gray100};
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
