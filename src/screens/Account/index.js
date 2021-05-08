import React from 'react';
import { TouchableOpacity } from 'react-native';

import CheckIcon from '../../assets/svg/check.svg';
import MaleIcon from '../../assets/svg/male.svg';
import FemaleIcon from '../../assets/svg/female.svg';

import {
    AccountContainer,

    AccountConfirmButton,

    AccountTitle,

    AccountItem,
    AccountItemTitle,

    AccountItemPhotoContainer,
    AccountItemImgContainer,
    AccountItemImg,
    AccountItemImgUpload,
    
    AccountItemInput,

    AccountItemGenderButton
} from './styles';

export default() => {
    return(
        <AccountContainer>
            <AccountConfirmButton>
                <CheckIcon fill="#fff" width={15} height={15} />
            </AccountConfirmButton>

            <AccountTitle>Account</AccountTitle>

            <AccountItem>
                <AccountItemTitle>Photo</AccountItemTitle>

                <AccountItemPhotoContainer>
                    <AccountItemImgContainer source={require('../../assets/img/Eu.jpeg')} />
                    <TouchableOpacity>
                        <AccountItemImgUpload>Upload Image</AccountItemImgUpload>
                    </TouchableOpacity>
                </AccountItemPhotoContainer>
            </AccountItem>

            
            <AccountItem>
                <AccountItemTitle>Name</AccountItemTitle>
                <AccountItemInput placeholder="Name" />
            </AccountItem>

            <AccountItem>
                <AccountItemTitle>Age</AccountItemTitle>
                <AccountItemInput placeholder="24" />
            </AccountItem>

            <AccountItem>
                <AccountItemTitle>Gender</AccountItemTitle>

                <AccountItemGenderButton>
                    <FemaleIcon fill="#fff" width={15} height={15} />
                </AccountItemGenderButton>

                <AccountItemGenderButton>
                    <MaleIcon fill="#fff" width={15} height={15} />
                </AccountItemGenderButton>
            </AccountItem>

            <AccountItem>
                <AccountItemTitle>Email</AccountItemTitle>
                <AccountItemInput placeholder="matheusgomes192@hotmail.com" />
            </AccountItem>
            
        </AccountContainer>
    )
}