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
    PromotionImg,

    FlashSaleArea,
    FlashSaleHeader,
    FlashSaleTitle,
    FlashSaleClosingIn,
    FlashSaleClosingInText,
    FlashSaleCount,
    FlashSaleTime,
    FlashSaleScroll,
    FlashSaleItem,
    FlashSaleImgView,
    FlashSaleImg,
    FlashSaleName,
    FlashSalePrice,
    FlashSaleDiscountView,
    FlashSaleDiscountText
} from './styles';

import { gray200, gray800 } from '../../styles';
import { ScrollView } from 'react-native';

export default function Home() {
    const flashSaleArray = [
        {id: 1, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
        {id: 2, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
        {id: 3, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
        {id: 4, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
    ];

    return(
        <HomeContainer>
            <ScrollView>

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

                <FlashSaleArea>
                    <FlashSaleHeader>
                        <FlashSaleTitle>Flash Sale</FlashSaleTitle>
                        <FlashSaleClosingIn>
                            <FlashSaleClosingInText>Closing in:</FlashSaleClosingInText>

                            <FlashSaleCount>
                                <FlashSaleTime>09</FlashSaleTime>
                            </FlashSaleCount>
                            <FlashSaleCount>
                                <FlashSaleTime>27</FlashSaleTime>
                            </FlashSaleCount>
                            <FlashSaleCount>
                                <FlashSaleTime>51</FlashSaleTime>
                            </FlashSaleCount>

                        </FlashSaleClosingIn>
                    </FlashSaleHeader>
                    <FlashSaleScroll contentContainerStyle={{marginVertical: 10, paddingHorizontal: 5}} horizontal={true}>
                        {flashSaleArray.map((item, k) => (
                            <FlashSaleItem key={k}>
                                <FlashSaleImgView>
                                    <FlashSaleImg source={require('../../assets/img/watch.png')} />
                                </FlashSaleImgView>
                                <FlashSaleName>{item.name}</FlashSaleName>
                                <FlashSalePrice>R$ {item.price}</FlashSalePrice>

                                <FlashSaleDiscountView>
                                    <FlashSaleDiscountText>50% off</FlashSaleDiscountText>
                                </FlashSaleDiscountView>
                            </FlashSaleItem>
                        ))}
                    </FlashSaleScroll>
                </FlashSaleArea>

            </ScrollView>
        </HomeContainer>
    )
}