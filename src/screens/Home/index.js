import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import WatchPng from '../../assets/img/watch.png';
import SearchIcon from '../../assets/svg/search.svg';
import NotificationIcon from '../../assets/svg/bell.svg';
import FavoriteIcon from '../../assets/svg/heart.svg';

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
    FlashSaleItem,
    FlashSaleImgView,
    FlashSaleImg,
    FlashSaleName,
    FlashSalePrice,
    FlashSaleDiscountView,
    FlashSaleDiscountText,

    ProductsArea,
    ProductsFilter,
    ProductsFilterText,
    ProductsArray,
    ProductsItem,
    ProductsImg,
    ProductsName,
    ProductsPrice,
    ProductsFavoriteBtn
} from './styles';
import { defaultColor, gray200, gray800 } from '../../styles';


export default function Home() {
    const productArray = [
        {id: 1, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41, marginTop: -50},
        {id: 2, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
        {id: 3, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41, marginTop: -50},
        {id: 4, img: '../../assets/img/watch.png', name: 'Apple Watch', price: 185.41},
    ];

    const navigation = useNavigation();

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
                    <ScrollView contentContainerStyle={{marginVertical: 10, paddingHorizontal: 5}} horizontal={true}>
                        {productArray.map((item, k) => (
                            <FlashSaleItem onPress={() => navigation.navigate('product')} key={k}>
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
                    </ScrollView>
                </FlashSaleArea>

                <ProductsArea>
                    <ScrollView horizontal={true} contentContainerStyle={{marginVertical: 10, paddingHorizontal: 5}}>
                            <ProductsFilter style={{backgroundColor: defaultColor}}>
                                <ProductsFilterText style={{color: '#fff'}}>All</ProductsFilterText>
                            </ProductsFilter>
                            <ProductsFilter>
                                <ProductsFilterText>Top</ProductsFilterText>
                            </ProductsFilter>
                            <ProductsFilter>
                                <ProductsFilterText>Recomended</ProductsFilterText>
                            </ProductsFilter>
                            <ProductsFilter>
                                <ProductsFilterText>Most Viewed</ProductsFilterText>
                            </ProductsFilter>
                            <ProductsFilter>
                                <ProductsFilterText>Low Price</ProductsFilterText>
                            </ProductsFilter>
                    </ScrollView>

                    <ProductsArray>
                        {productArray.map((item, k) => (
                            <View key={k} style={{margin: 10, width: '45%', marginTop: item.marginTop}}>
                                    <ProductsItem onPress={() => navigation.navigate('product')} key={k}>
                                        <ProductsImg source={require('../../assets/img/dress2.png')} />

                                        <ProductsFavoriteBtn>
                                            <FavoriteIcon fill={gray800} width="20px" height="20px" />
                                        </ProductsFavoriteBtn>
                                    </ProductsItem>

                                    <ProductsName>{item.name}</ProductsName>
                                    <ProductsPrice>R$ {item.price}</ProductsPrice>
                            </View>
                        ))}
                    </ProductsArray>
                </ProductsArea>

            </ScrollView>
        </HomeContainer>
    )
}