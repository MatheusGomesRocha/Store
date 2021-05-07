import React from 'react';
import { useNavigation } from '@react-navigation/native';

import WorldIcon from '../../assets/svg/world.svg';
import BellIcon from '../../assets/svg/bell.svg';
import MoonIcon from '../../assets/svg/moon.svg';
import HelpIcon from '../../assets/svg/help.svg';
import AngleRightIcon from '../../assets/svg/angle-right.svg';
import UserIcon from '../../assets/svg/user.svg';

import {
    ProfileContainer,

    ProfileTitle,
    ProfileSmallerTitle,
    
    ProfileItemContainer,
    ProfileItem,
    ProfileItemImgContainer,
    ProfileItemImg,
    ProfileItemInfo,
    ProfileItemTitle,
    ProfileItemSmallerTitle,
    ProfileItemButton,
} from './styles';

export default function Home() {
    const settingsArray = [
        {id: 1, Icon: WorldIcon, blue: true, title: 'Language', smallerTitle: 'English', navigation: true},
        {id: 2, Icon: BellIcon, orange: true, title: 'Notifications', navigation: true},
        {id: 3, Icon: MoonIcon, purple: true, title: 'Dark Mode', smallerTitle: 'Off'},
        {id: 4, Icon: HelpIcon, red: true, title: 'Help', navigation: true},
    ];

    const SettingsComponent = () => {
        return(
            <ProfileItemContainer>
                <ProfileSmallerTitle>Settings</ProfileSmallerTitle>
                
                {settingsArray.map((item, k) => (
                    <ProfileItem key={k}>
                        <ProfileItemImgContainer>
                            <item.Icon fill="#000" width={20} height={20} />
                        </ProfileItemImgContainer>
                        <ProfileItemTitle>{item.title}</ProfileItemTitle>
                        <ProfileItemSmallerTitle>{item.smallerTitle}</ProfileItemSmallerTitle>

                        {item.navigation &&
                            <ProfileItemButton>
                                <AngleRightIcon fill="#000" width={22} height={22} />
                            </ProfileItemButton>
                        }
                    </ProfileItem>
                ))}    
            </ProfileItemContainer>
        )
    }

    const navigation = useNavigation();

    return(
        <ProfileContainer>
            <ProfileTitle>Settings</ProfileTitle>

            <ProfileSmallerTitle>Account</ProfileSmallerTitle>
            <ProfileItem>
                <ProfileItemImgContainer>
                    <UserIcon fill="#000" width={20} height={20} />
                </ProfileItemImgContainer>
                
                <ProfileItemInfo>
                    <ProfileItemTitle>Matheus Gomes</ProfileItemTitle>
                    <ProfileItemSmallerTitle>Personal Info</ProfileItemSmallerTitle>
                </ProfileItemInfo>

                <ProfileItemButton>
                    <AngleRightIcon fill="#000" width={22} height={22} />
                </ProfileItemButton>
            </ProfileItem>

            <SettingsComponent />
        </ProfileContainer>
    )
}