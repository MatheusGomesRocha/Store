import React from 'react';


import SearchIcon from '../../assets/svg/search.svg';
import NotificationIcon from '../../assets/svg/bell.svg';
import {
    HomeContainer,

    Header,
    DivInputSearch,
    Input,
    ButtonNotification
} from './styles';

import { gray200, gray500, gray800 } from '../../styles';

export default function Home() {
    return(
        <HomeContainer>

            <Header>
                <DivInputSearch>
                    <SearchIcon fill={gray500} width="25px" height="25px" />
                    <Input placeholderTextColor={gray200} placeholder="Search" />
                </DivInputSearch>

                <ButtonNotification>
                    <NotificationIcon fill={gray800} width="25px" height="25px" />
                </ButtonNotification>
            </Header>
        </HomeContainer>
    )
}