import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

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
    const [gender, setGender] = useState('');

    return(
        <AccountContainer>
            <ScrollView contentContainerStyle={{padding: 40}}>
                <AccountConfirmButton>
                    <CheckIcon fill="#fff" width={20} height={20} />
                </AccountConfirmButton>

                <AccountTitle>Account</AccountTitle>

                <AccountItem style={{alignItems: 'flex-start'}}>
                    <AccountItemTitle>Photo</AccountItemTitle>

                    <AccountItemPhotoContainer>
                        <AccountItemImgContainer>
                            <AccountItemImg source={require('../../assets/img/Eu.jpeg')} />
                        </AccountItemImgContainer>
                        <TouchableOpacity style={{marginTop: 20}}>
                            <AccountItemImgUpload>Upload Image</AccountItemImgUpload>
                        </TouchableOpacity>
                    </AccountItemPhotoContainer>
                </AccountItem>

                
                <AccountItem>
                    <AccountItemTitle>Name</AccountItemTitle>
                    <AccountItemInput defaultValue="Matheus Gomes" />
                </AccountItem>

                <AccountItem>
                    <AccountItemTitle>Age</AccountItemTitle>
                    <AccountItemInput defaultValue="24" />
                </AccountItem>

                <AccountItem>
                    <AccountItemTitle>Gender</AccountItemTitle>

                    <AccountItemGenderButton background={gender === 'female' && '#fe705f'} onPress={() => setGender('female')}>
                        <FemaleIcon fill={gender === 'female' ? '#fff' : '#808080'} width={22} height={22} />
                    </AccountItemGenderButton>

                    <AccountItemGenderButton background={gender === 'male' && '#fe705f'} onPress={() => setGender('male')}>
                        <MaleIcon fill={gender === 'male' ? '#fff' : '#808080'} width={22} height={22} />
                    </AccountItemGenderButton>
                </AccountItem>

                <AccountItem>
                    <AccountItemTitle>Email</AccountItemTitle>
                    <AccountItemInput defaultValue="matheusgomes192@hotmail.com" />
                </AccountItem>
            </ScrollView>
            
        </AccountContainer>
    )
}