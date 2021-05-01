import React from 'react';

import WatchPng from '../../assets/img/watch.png';
import SearchIcon from '../../assets/svg/search.svg';
import NotificationIcon from '../../assets/svg/bell.svg';
import {
    HomeContainer,

    Header,
    DivInputSearch,
    Input,
    ButtonNotification,

    PromotionArea,
    PromotionInsideLeft,
    PromotionText,
    PromotionImg
} from './styles';

import { gray200, gray800 } from '../../styles';

export default function Home() {
    return(
        <HomeContainer>

            <Header>
                <DivInputSearch>
                    <SearchIcon fill={gray200} width="25px" height="25px" />
                    <Input placeholderTextColor={gray200} placeholder="Search" />
                </DivInputSearch>

                <ButtonNotification>
                    <NotificationIcon fill={gray800} width="25px" height="25px" />
                </ButtonNotification>
            </Header>

            <PromotionArea>
                <PromotionInsideLeft>
                    <PromotionText>Hot Sale</PromotionText>
                    <PromotionText style={{fontWeight: 'bold'}}>40% Off</PromotionText>
                    <PromotionText style={{marginTop: 25, fontSize: 20}}>Rolex Smartwatch</PromotionText>
                </PromotionInsideLeft>

                <PromotionImg source={require('../../assets/img/watch.png')} />
            </PromotionArea>

        </HomeContainer>
    )
}