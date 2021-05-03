import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import FavoriteIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/shopping-basket.svg';

import {
    ProductContainer,

    HeaderArea,
    RowButtons,
    RowDefaultButton,

    InfoArea,
    InfoHeader,
    InfoHeaderText,
    InfoDescription,
    InfoSelect,
    InfoSelectTitle,
    InfoSelectOptions,
    InfoOptionForSelection,
    InfoOptionForSelectionText,
    AddToCartButton,
    AddToCartText
} from './styles';

export default function Product() {
    const [ColorSelected, setColorSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('M');

    return(
        <ProductContainer>
            <StatusBar translucent={true} backgroundColor="transparent" /> 

            <HeaderArea source={require('../../assets/img/product2.jpg')}>
                <RowButtons>
                    <RowDefaultButton>
                        <FavoriteIcon color="#333" height={25} width={25} />
                    </RowDefaultButton>

                    <RowDefaultButton>
                        <FavoriteIcon color="#333" height={25} width={25} />
                    </RowDefaultButton>
                </RowButtons>
            </HeaderArea>

            <InfoArea>
                <InfoHeader>
                    <InfoHeaderText>Corduroy Cap</InfoHeaderText>
                    <InfoHeaderText>R$ 36.00</InfoHeaderText>
                </InfoHeader>

                <InfoDescription>
                    A corduroy cap will perfectly complement your image. This hat is suitable
                    for both the classic style and for casual style.
                </InfoDescription>

                <InfoSelect>
                    <InfoSelectTitle>Color</InfoSelectTitle>

                    <InfoSelectOptions>
                        <InfoOptionForSelection />
                        <InfoOptionForSelection />
                        <InfoOptionForSelection />
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

                <AddToCartButton>
                    <CartIcon fill="#fff" width={25} height={25} />
                    <AddToCartText>Add to cart</AddToCartText>
                </AddToCartButton>
            </InfoArea>
        </ProductContainer>
    )
}