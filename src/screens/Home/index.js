import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import SearchIcon from '../../assets/svg/search.svg';
import AdjustIcon from '../../assets/svg/adjust.svg';
import FavoriteIcon from '../../assets/svg/heart.svg';
import MenuGridIcon from '../../assets/svg/menu-grid.svg';

import {
    HomeContainer,

    Header,
    HeaderButton,

    FilterArea,
    FilterItem,
    FilterText,

    ProductsArea,
    ProductsHeader,
    ProductsHeaderRow,
    ProductsTitle,
    ProductsSmallTitle,
    ProductsSeeAll,
    ProductsSeeAllText,
    ProductsItem,
    ProductsImgContainer,
    ProductsImg,
    ProductsFavoriteButton,
    ProductsInfo,
    ProductsName,
    ProductsPrice,
} from './styles';

import { defaultColor } from '../../styles';

export default function Home() {
    const productArray = [
        {id: 1, img: require('../../assets/img/dress2.png'), name: 'Winter Dress', price: 185.41},
        {id: 2, img: require('../../assets/img/dress2.png'), name: 'Snicker Air Jordan XXL', price: 90.00},
        {id: 3, img: require('../../assets/img/dress2.png'), name: 'Apple Watch', price: 110.90},
        {id: 4, img: require('../../assets/img/dress2.png'), name: 'Cowboy hat', price: 99.90},
    ];

    const [filter, setFilter] = useState('all');

    const navigation = useNavigation();

    const FilterComponent = () => {
        return(
            <ScrollView horizontal={true}>
                <FilterArea>
                    <FilterItem background={filter === 'all' && '#FCEDEA'} onPress={() => setFilter('all')}>
                        <FilterText color={filter === 'all' && defaultColor}>All</FilterText>
                    </FilterItem>

                    <FilterItem background={filter === 'huddi' && '#FCEDEA'} onPress={() => setFilter('huddi')}>
                        <FilterText color={filter === 'huddi' && defaultColor}>Huddi</FilterText>
                    </FilterItem>
                            
                    <FilterItem background={filter === 'jacket' && '#FCEDEA'} onPress={() => setFilter('jacket')}>
                        <FilterText color={filter === 'jacket' && defaultColor}>Jacket</FilterText>
                    </FilterItem>

                    <FilterItem background={filter === 'jeans' && '#FCEDEA'} onPress={() => setFilter('jeans')}>
                        <FilterText color={filter === 'jeans' && defaultColor}>Jeans</FilterText>
                    </FilterItem>

                    <FilterItem background={filter === 'hat' && '#FCEDEA'} onPress={() => setFilter('hat')}>
                        <FilterText color={filter === 'hat' && defaultColor}>Hats</FilterText>
                    </FilterItem>

                    <FilterItem background={filter === 'shirt' && '#FCEDEA'} onPress={() => setFilter('shirt')}>
                        <FilterText color={filter === 'shirt' && defaultColor}>Shirts</FilterText>
                    </FilterItem>
                </FilterArea>
            </ScrollView>
        )
    }

    const RecommendedComponent = () => {
        return(
            <ProductsArea>
                <ProductsHeader>
                    <ProductsTitle>Recommended for your</ProductsTitle>
                    <ProductsSmallTitle>Based on search</ProductsSmallTitle>
                </ProductsHeader>

                <ScrollView horizontal={true}>
                    {productArray.map((item, k) => (
                        <ProductsItem key={k} onPress={() => navigation.navigate('product')}>
                            <ProductsImgContainer>
                                <ProductsImg resizeMode="center" source={item.img} />
                                <ProductsFavoriteButton>
                                    <FavoriteIcon fill="#000" width={25} height={25} />
                                </ProductsFavoriteButton>
                            </ProductsImgContainer>

                            <ProductsInfo>
                                <ProductsName numberOfLines={1}>{item.name}</ProductsName>
                                <ProductsPrice>R${item.price}</ProductsPrice>
                            </ProductsInfo>
                        </ProductsItem>
                    ))}
                </ScrollView>
            </ProductsArea>
        )
    }

    const TopCollectionComponent = () => {
        return(
            <ProductsArea>
                <ProductsHeaderRow>
                    <ProductsTitle>Top Collection</ProductsTitle>
                    <ProductsSeeAll>
                        <ProductsSeeAllText>See All</ProductsSeeAllText>
                    </ProductsSeeAll>
                </ProductsHeaderRow>

                <ScrollView horizontal={true}>
                    {productArray.map((item, k) => (
                        <ProductsItem key={k} onPress={() => navigation.navigate('product')}>
                            <ProductsImgContainer>
                                <ProductsImg resizeMode="center" source={item.img} />
                                <ProductsFavoriteButton>
                                    <FavoriteIcon fill="#000" width={25} height={25} />
                                </ProductsFavoriteButton>
                            </ProductsImgContainer>

                            <ProductsInfo>
                                <ProductsName numberOfLines={1}>{item.name}</ProductsName>
                                <ProductsPrice>R${item.price}</ProductsPrice>
                            </ProductsInfo>
                        </ProductsItem>
                    ))}
                </ScrollView>
            </ProductsArea>
        )
    }

    const UpcomingComponent = () => {
        return(
            <ProductsArea>
                <ProductsHeaderRow>
                    <ProductsTitle>Upcoming Clothes</ProductsTitle>
                    <ProductsSeeAll>
                        <ProductsSeeAllText>See All</ProductsSeeAllText>
                    </ProductsSeeAll>
                </ProductsHeaderRow>

                <ScrollView horizontal={true}>
                    {productArray.map((item, k) => (
                        <ProductsItem key={k} onPress={() => navigation.navigate('product')}>
                            <ProductsImgContainer>
                                <ProductsImg resizeMode="center" source={item.img} />
                                <ProductsFavoriteButton>
                                    <FavoriteIcon fill="#000" width={25} height={25} />
                                </ProductsFavoriteButton>
                            </ProductsImgContainer>

                            <ProductsInfo>
                                <ProductsName numberOfLines={1}>{item.name}</ProductsName>
                                <ProductsPrice>R${item.price}</ProductsPrice>
                            </ProductsInfo>
                        </ProductsItem>
                    ))}
                </ScrollView>
            </ProductsArea>
        )
    }

    return(
        <HomeContainer>
            <ScrollView>
                <Header>
                    <HeaderButton style={{backgroundColor: '#000'}}>
                        <MenuGridIcon fill="#fff" width={20} height={20} />
                    </HeaderButton>

                    <HeaderButton style={{marginLeft: 'auto'}}>
                        <SearchIcon fill="#000" width={20} height={20}/>
                    </HeaderButton>

                    <HeaderButton>
                        <AdjustIcon fill="#000" width={20} height={20}/>
                    </HeaderButton>
                </Header>

                <FilterComponent />

                <RecommendedComponent />

                <TopCollectionComponent />

                <UpcomingComponent />
                
            </ScrollView>
        </HomeContainer>
    )
}