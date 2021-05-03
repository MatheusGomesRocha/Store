import React from 'react';

import FavoriteIcon from '../../assets/svg/heart.svg';
import CartIcon from '../../assets/svg/shopping-basket.svg';
{/* <StatusBar translucent={true} backgroundColor="transparent" /> */}

export default function Product() {
    return(
        <ProductContainer>
            <HeaderArea>
                <ProductImage source={require('../../assets/img/product2.jpg')} />
                
                <RowButtons>
                    <BackButton>
                        <FavoriteIcon color="#333" height={25} width={25} />
                    </BackButton>

                    <FavoriteButton>
                        <FavoriteIcon color="#333" height={25} width={25} />
                    </FavoriteButton>
                </RowButtons>
            </HeaderArea>

            <InfoArea>
                <InfoHeader>
                    <InfoName>Corduroy Cap</InfoName>
                    <InfoPrice>R$ 36.00</InfoPrice>
                </InfoHeader>

                <InfoDescription>
                    A corduroy cap will perfectly complement your image. This hat is suitable
                    for both the classic style and for casual style.
                </InfoDescription>

                <InfoColorSelect>
                    <InfoColorSelectTile>Color</InfoColorSelectTile>

                    <InfoColorSelectOptions>
                        <InfoColorOption />
                        <InfoColorOption />
                        <InfoColorOption />
                    </InfoColorSelectOptions>
                </InfoColorSelect>

                <InfoSizeSelect>
                    <InfoSizeSelectTitle>Size</InfoSizeSelectTitle>

                    <InfoSizeSelectOptions>
                        <InfoSizeOption>S</InfoSizeOption>
                        <InfoSizeOption>M</InfoSizeOption>
                        <InfoSizeOption>L</InfoSizeOption>
                    </InfoSizeSelectOptions>
                </InfoSizeSelect>

                <AddToCartButton>
                    <CartIcon color="#fff" width={25} height={25} />
                    <AddToCartText>Add to cart</AddToCartText>
                </AddToCartButton>
            </InfoArea>
        </ProductContainer>
    )
}