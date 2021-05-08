import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Switch } from 'react-native';

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
    ProfileItemFlexEnd,
    ProfileItemSmallerTitle,
    ProfileItemButton,
} from './styles';

export default function Home() {
    const settingsArray = [
        {id: 1, Icon: WorldIcon, title: 'Language', smallerTitle: 'English', navigation: true, background: '#C8F8FF', fill: '#00BDDB'},
        {id: 2, Icon: BellIcon, title: 'Notifications', navigation: true, background: '#F8E3D3', fill: '#E88164'},
        {id: 3, Icon: MoonIcon, title: 'Dark Mode', switch: true, background: '#DAD5EB', fill: '#3E51C2'},
        {id: 4, Icon: HelpIcon, title: 'Help', navigation: true, background: '#F7C7CF', fill: '#E02544'},
    ];

    const SettingsComponent = () => {
        return(
            <ProfileItemContainer>
                <ProfileSmallerTitle>Settings</ProfileSmallerTitle>
                
                {settingsArray.map((item, k) => (
                    <ProfileItem key={k}>
                        <ProfileItemImgContainer background={item.background}>
                            <item.Icon fill={item.fill} width={25} height={25} />
                        </ProfileItemImgContainer>
                        <ProfileItemTitle>{item.title}</ProfileItemTitle>
                        <ProfileItemFlexEnd>
                            <ProfileItemSmallerTitle style={{marginRight: 15}}>{item.smallerTitle}</ProfileItemSmallerTitle>
                            {item.navigation &&
                                <ProfileItemButton>
                                    <AngleRightIcon fill="#000" width={15} height={15} />
                                </ProfileItemButton>
                            }

                            {item.switch &&
                                <>
                                    <ProfileItemSmallerTitle style={{marginRight: 15}}>{isEnabled ? 'On' : 'Off'}</ProfileItemSmallerTitle>

                                    <Switch
                                        trackColor={{ false: "#afb2b1", true: "#efaba1" }}
                                        thumbColor={isEnabled ? "#fe705f" : "#fff"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => setIsEnabled(!isEnabled)}
                                        value={isEnabled}
                                    />

                                </>
                            }
                            
                        </ProfileItemFlexEnd>
                    </ProfileItem>
                ))}    
            </ProfileItemContainer>
        )
    }

    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);

    return(
        <ProfileContainer>
            <ScrollView contentContainerStyle={{paddingVertical: 40}}>

                <ProfileTitle>Settings</ProfileTitle>

                <ProfileSmallerTitle>Account</ProfileSmallerTitle>
                <ProfileItem>
                    <ProfileItemImgContainer>
                        <ProfileItemImg source={require('../../assets/img/Eu.jpeg')} />
                    </ProfileItemImgContainer>
                    
                    <ProfileItemInfo>
                        <ProfileItemTitle>Matheus Gomes</ProfileItemTitle>
                        <ProfileItemSmallerTitle>Personal Info</ProfileItemSmallerTitle>
                    </ProfileItemInfo>

                    <ProfileItemButton onPress={() => navigation.navigate('account')}>
                        <AngleRightIcon fill="#000" width={15} height={15} />
                    </ProfileItemButton>
                </ProfileItem>

                <SettingsComponent />

            </ScrollView>
        </ProfileContainer>
    )
}