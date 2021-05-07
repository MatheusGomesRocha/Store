import React, { useState } from 'react';
import { StatusBar, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

import { defaultColor, lightDefaultColor } from '../../styles';
import StarIcon from '../../assets/svg/star.svg';
import ShoppingBasketIcon from '../../assets/svg/shopping-basket.svg';
import CheckIcon from '../../assets/svg/check.svg';

import {
    ProductContainer,

    HeaderArea,

    InfoArea,
    InfoHeader,
    InfoHeaderText,
    PriceValue,

    SizeAndColorArea,
    SizeArea,
    SizeText,
    SizeOption,
    SizeOptionText,
    ColorArea,
    ColorOption,
    ColorOptionIcon,

    FooterArea,
    DetailsAndReviewButton,
    DefaultButton,
    DefaultButtonText,
    DetailsDescription,

    AddToCartButton,
    AddToCartText
} from './styles';

export default function Product() {
    const [colorSelected, setColorSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('M');
    const [detailOrReview, setDetailOrReview] = useState('detail');

    const color1 = '#8257e5';
    const color2 = '#F96332';
    const color3 = '#C94A64';

    const InfoSelectComponent = () => {
        return(
            <SizeAndColorArea>
                <SizeArea>
                    <SizeText>Choose Size</SizeText>

                    <View style={{flexDirection: 'row'}}>
                        <SizeOption border={sizeSelected === 'S' && 'none'} background={sizeSelected === 'S' && '#FCEDEA'} onPress={() => setSizeSelected('S')}>
                            <SizeOptionText color={sizeSelected === 'S' && defaultColor}>S</SizeOptionText>
                        </SizeOption>

                        <SizeOption border={sizeSelected === 'M' && 'none'} background={sizeSelected === 'M' && '#FCEDEA'} onPress={() => setSizeSelected('M')}>
                            <SizeOptionText color={sizeSelected === 'M' && defaultColor}>M</SizeOptionText>
                        </SizeOption>

                        <SizeOption border={sizeSelected === 'L' && 'none'} background={sizeSelected === 'L' && '#FCEDEA'} onPress={() => setSizeSelected('L')}>
                            <SizeOptionText color={sizeSelected === 'L' && defaultColor}>L</SizeOptionText>
                        </SizeOption>

                        <SizeOption border={sizeSelected === 'XL' && 'none'} background={sizeSelected === 'XL' && '#FCEDEA'} onPress={() => setSizeSelected('XL')}>
                            <SizeOptionText color={sizeSelected === 'XL' && defaultColor}>XL</SizeOptionText>
                        </SizeOption>
                    </View>
                </SizeArea>

                <ColorArea>
                    <ColorOption onPress={() => setColorSelected(1)} background={color1}>
                        <ColorOptionIcon opacity={colorSelected === 1 && 1}>
                            <CheckIcon fill="#fff" width={10} height={10} />
                        </ColorOptionIcon>
                    </ColorOption>
                    
                    <ColorOption onPress={() => setColorSelected(2)} background={color2}>
                        <ColorOptionIcon opacity={colorSelected === 2 && 1}>
                            <CheckIcon fill="#fff" width={10} height={10} />
                        </ColorOptionIcon>                    
                    </ColorOption>
                
                    <ColorOption onPress={() => setColorSelected(3)} background={color3}>
                        <ColorOptionIcon opacity={colorSelected === 3 && 1}>
                            <CheckIcon fill="#fff" width={10} height={10} />
                        </ColorOptionIcon>                    
                    </ColorOption>
                </ColorArea>
            </SizeAndColorArea>
        )
    }

    const FooterComponent = () => {
        return(
            <FooterArea>
                <DetailsAndReviewButton>
                    <DefaultButton borderColor={detailOrReview === 'detail' && defaultColor} onPress={() => setDetailOrReview('detail')}>
                        <DefaultButtonText color={detailOrReview === 'detail' && defaultColor}>Details</DefaultButtonText>
                    </DefaultButton>

                    <DefaultButton borderColor={detailOrReview === 'review' && defaultColor} onPress={() => setDetailOrReview('review')}>
                        <DefaultButtonText color={detailOrReview === 'review' && defaultColor}>Review</DefaultButtonText>
                    </DefaultButton>
                </DetailsAndReviewButton>

                <DetailsDescription>
                    This hoodie sweater is perfect for autumn and winter. It's made in a slightly heavier fleece
                    fabric, making you ready for the cold season in an instant.
                </DetailsDescription>
            </FooterArea>
        )
    }

    return(
        <ProductContainer>
            <StatusBar translucent={true} backgroundColor="transparent" /> 

            <Swiper
                style={{backgroundColor: '#f7f8fa'}}
                dot={
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        width: 10,
                        height: 10,
                        borderRadius: 20,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 240
                      }}
                    />
                }
                activeDot={
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: 30,
                        height: 10,
                        borderRadius: 10,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 240
                      }}
                    />
                }
            >
                <HeaderArea resizeMode="center" source={require('../../assets/img/women.png')} />
                <HeaderArea resizeMode="center" source={require('../../assets/img/women.png')} />
                <HeaderArea resizeMode="center" source={require('../../assets/img/women.png')} />
            </Swiper>
               
            <InfoArea>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <InfoHeader>
                        <InfoHeaderText>Corduroy Cap</InfoHeaderText>
                        <PriceValue>R$ 99,90</PriceValue>
                    </InfoHeader>

                    <InfoSelectComponent />

                    <FooterComponent />

                    <AddToCartButton>
                        <ShoppingBasketIcon fill="#fff" width={25} height={25} />
                        <AddToCartText>Add to cart</AddToCartText>
                    </AddToCartButton>

                </ScrollView>
            </InfoArea>
        </ProductContainer>
    )
}