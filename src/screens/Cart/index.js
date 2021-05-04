import React, { useState } from 'react';
import { FlatList, StatusBar } from 'react-native';

import EmptyCartIcon from '../../assets/svg/empty_cart.svg';
import MinusIcon from '../../assets/svg/minus.svg';
import PlusIcon from '../../assets/svg/plus.svg';
import DeleteIcon from '../../assets/svg/delete.svg';
import { gray100, gray50 } from '../../styles';

import {
    CartContainer,

    EmptyCartArea,
    EmptyCartTitle,
    EmptyCartText,
    EmptyCartButton,
    EmptyCartButtonText,

    CartArea,
    CartTitle,
    CartLeftColumn,
    CartProductImgContainer,
    CartProductImg,
    SaveButton,
    SaveText,

    CartProductInfo,
    CartProductName,
    CartProductPrice,
    CartProductSizeAndColorText,

    CartQuantity,
    CartQuantityButton,
    CartQuantityValue,

    CartDeleteButton,

    BuyNowArea,
    BuyNowHeader,
    SubtotalText,
    SubtotalValue,
    BuyNowButton,
    BuyNowText
} from './styles';

export default function Home() {
    const [emptyCart, setEmptyCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const productArray = [
        {id: 1, img: require('../../assets/img/dress2.png'), name: 'Apple Watch', category: 'Accessories',price: 185.41, marginTop: -50},
        {id: 2, img: require('../../assets/img/dress2.png'), name: 'Basketball Shoes Air Jordan XXXV', category: 'Accessories', price: 185.41},
        {id: 3, img: require('../../assets/img/dress2.png'), name: 'Apple Watch', category: 'Accessories', price: 185.41, marginTop: -50},
        {id: 4, img: require('../../assets/img/dress2.png'), name: 'Apple Watch', category: 'Accessories', price: 185.41},
    ];

    const EmptyCartComponent = () => {
        return(
            <EmptyCartArea>
                <EmptyCartIcon width={250} height={250} />
                <EmptyCartTitle>Empty Cart</EmptyCartTitle>
                <EmptyCartText>Your cart is still empty, browse the attractive promos from our store.</EmptyCartText>

                <EmptyCartButton>
                    <EmptyCartButtonText>Shopping Now</EmptyCartButtonText>
                </EmptyCartButton>
            </EmptyCartArea>
        )
    }

    const CartIsNotEmptyComponent = ({item}) => {
        return(
            <CartArea>
                <CartLeftColumn>
                    <CartProductImgContainer>
                        <CartProductImg resizeMode="center" source={item.img} />
                    </CartProductImgContainer>
                    <SaveButton>
                        <SaveText>Save for later</SaveText>
                    </SaveButton>
                </CartLeftColumn>

                <CartProductInfo>
                    <CartProductName>{item.name}</CartProductName>
                    <CartProductPrice>R$ 150,90</CartProductPrice>
                    <CartProductSizeAndColorText>Large | Blue</CartProductSizeAndColorText>

                    <CartQuantity>
                        <CartQuantityButton disabled={quantity === 1 && true} onPress={() => setQuantity(quantity - 1)}>
                            <MinusIcon fill="#000" width={12} height={12} />
                        </CartQuantityButton>

                        <CartQuantityValue>{quantity}</CartQuantityValue>

                        <CartQuantityButton onPress={() => setQuantity(quantity + 1)}>
                            <PlusIcon fill="#000" width={12} height={12} />
                        </CartQuantityButton>
                    </CartQuantity>
                </CartProductInfo>

                <CartDeleteButton>
                    <DeleteIcon fill="red" width={15} height={15} />
                </CartDeleteButton>
            </CartArea>
        )
    }

    return(
        <CartContainer>
            <StatusBar backgroundColor={gray50} />
            {emptyCart ? 
                <EmptyCartComponent />
            : 
                <>
                    <FlatList
                        contentContainerStyle={{paddingVertical: 30}}
                        ListHeaderComponent={
                            <>
                                <CartTitle>Cart</CartTitle>
                            </>
                        }
                        data={productArray}
                        renderItem={({ item }) => <CartIsNotEmptyComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                    <BuyNowArea>
                        <BuyNowHeader>
                            <SubtotalText>Subtotal:</SubtotalText>
                            <SubtotalValue>R$ 457,50</SubtotalValue>
                        </BuyNowHeader>

                        <BuyNowButton>
                            <BuyNowText>Buy Now</BuyNowText>
                        </BuyNowButton>
                    </BuyNowArea>
                </>
            }
        </CartContainer>
    )
}