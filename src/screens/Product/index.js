import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';

import StarIcon from '../../assets/svg/star.svg';
import BookmarkIcon from '../../assets/svg/bookmark.svg';
import CheckIcon from '../../assets/svg/check.svg';

import {
    ProductContainer,

    HeaderArea,

    InfoArea,
    InfoHeader,
    InfoHeaderText,
    InfoDescription,
    RateAndPriceArea,
    RateArea,
    RateValue,
    RateQuantity,
    PriceArea,
    PriceValue,
    PriceOlderValue,
    InfoSelect,
    InfoSelectTitle,
    InfoSelectOptions,
    InfoOptionForSelection,
    InfoOptionSelected,
    InfoOptionForSelectionText,
    RowButtons,
    SaveProductButton,
    AddToCartButton,
    AddToCartText
} from './styles';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import { defaultColor } from '../../styles';

export default function Product() {
    const [colorSelected, setColorSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('M');

    const color1 = '#8257e5';
    const color2 = '#F96332';
    const color3 = '#C94A64';
    const color4 = '#364156';

    const InfoSelectComponent = () => {
        return(
            <>
                <InfoSelect>
                    <InfoSelectTitle>Color</InfoSelectTitle>

                    <InfoSelectOptions>

                        <InfoOptionForSelection onPress={() => setColorSelected(1)} background={color1}>
                            <InfoOptionSelected opacity={colorSelected === 1 ? 1 : 0}>
                                <CheckIcon fill="#fff" width={10} height={10} />
                            </InfoOptionSelected>
                        </InfoOptionForSelection>

                        <InfoOptionForSelection onPress={() => setColorSelected(2)} background={color2}>
                            <InfoOptionSelected opacity={colorSelected === 2 ? 1 : 0}>
                                <CheckIcon fill="#fff" width={10} height={10} />
                            </InfoOptionSelected>
                        </InfoOptionForSelection>

                        <InfoOptionForSelection onPress={() => setColorSelected(3)} background={color3}>
                            <InfoOptionSelected opacity={colorSelected === 3 ? 1 : 0}>
                                <CheckIcon fill="#fff" width={10} height={10} />
                            </InfoOptionSelected>
                        </InfoOptionForSelection>

                        <InfoOptionForSelection onPress={() => setColorSelected(4)} background={color4}>
                            <InfoOptionSelected opacity={colorSelected === 4 ? 1 : 0}>
                                <CheckIcon fill="#fff" width={10} height={10} />
                            </InfoOptionSelected>
                        </InfoOptionForSelection>

                    </InfoSelectOptions>
                </InfoSelect>

                <InfoSelect>
                    <InfoSelectTitle>Size</InfoSelectTitle>

                    <InfoSelectOptions>
                        <InfoOptionForSelection onPress={() => setSizeSelected('S')} background={sizeSelected === 'S' && '#000'}>
                            <InfoOptionForSelectionText color={sizeSelected === 'S' && '#fff'}>S</InfoOptionForSelectionText>
                        </InfoOptionForSelection>

                        <InfoOptionForSelection onPress={() => setSizeSelected('M')} background={sizeSelected === 'M' && '#000'}>
                            <InfoOptionForSelectionText color={sizeSelected === 'M' && '#fff'}>M</InfoOptionForSelectionText>
                        </InfoOptionForSelection>

                        <InfoOptionForSelection onPress={() => setSizeSelected('L')} background={sizeSelected === 'L' && '#000'}>
                            <InfoOptionForSelectionText color={sizeSelected === 'L' && '#fff'}>L</InfoOptionForSelectionText>
                        </InfoOptionForSelection>
                    </InfoSelectOptions>
                </InfoSelect>
            </>
        )
    }

    return(
        <ProductContainer>
            <StatusBar translucent={true} backgroundColor="transparent" /> 

            <Swiper
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
                        marginBottom: 190
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
                        marginBottom: 190
                      }}
                    />
                }
            >
                <HeaderArea source={require('../../assets/img/product2.jpg')} />
                <HeaderArea source={require('../../assets/img/product1.jpg')} />
                <HeaderArea source={require('../../assets/img/product2.jpg')} />
            </Swiper>
               

            <InfoArea>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <InfoHeader>
                        <InfoHeaderText>Corduroy Cap</InfoHeaderText>
                    </InfoHeader>

                    <InfoDescription>
                        A corduroy cap will perfectly complement your image. This hat is suitable
                        for both the classic style and for casual style.
                    </InfoDescription>

                    <RateAndPriceArea>
                        <RateArea>
                            <StarIcon fill="#000" width={25} height={25} />
                            <RateValue>4.8</RateValue>
                            <RateQuantity>(150)</RateQuantity>
                        </RateArea>

                        <PriceArea>
                            <PriceValue>R$ 99,90</PriceValue>
                            <PriceOlderValue>R$ 120</PriceOlderValue>
                        </PriceArea>
                    </RateAndPriceArea>

                    <InfoSelectComponent />

                    <RowButtons>
                        <SaveProductButton underlayColor={defaultColor} onPress={() => console.log('olá mundo')}>
                            <BookmarkIcon fill="#000" width={25} height={25} />
                        </SaveProductButton>
                        
                        <AddToCartButton>
                            <AddToCartText>Add to Cart</AddToCartText>
                        </AddToCartButton>
                    </RowButtons>
                </ScrollView>
            </InfoArea>
        </ProductContainer>
    )
}