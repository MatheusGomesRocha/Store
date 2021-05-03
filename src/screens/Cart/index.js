import React, { useState } from 'react';
import { FlatList } from 'react-native';

import EmptyCartIcon from '../../assets/svg/empty_cart.svg';

import {
    CartContainer,

    EmptyCartArea,
    EmptyCartTitle,
    EmptyCartText,
    EmptyCartButton,
    EmptyCartButtonText,

    CartArea,
    CartTitle,
    CartProductImg,
    CartProductInfo,
    CartProductName,
    CartProductCategory,
    CartProductPrice,
    CartQuantity,
    CartQuantityChange,
    CartQuantityValue
} from './styles';

export default function Home() {
    const [emptyCart, setEmptyCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const productArray = [
        {id: 1, img: require('../../assets/img/product2.jpg'), name: 'Apple Watch', category: 'Accessories',price: 185.41, marginTop: -50},
        {id: 2, img: require('../../assets/img/product1.jpg'), name: 'Apple Watch', category: 'Accessories', price: 185.41},
        {id: 3, img: require('../../assets/img/product2.jpg'), name: 'Apple Watch', category: 'Accessories', price: 185.41, marginTop: -50},
        {id: 4, img: require('../../assets/img/product1.jpg'), name: 'Apple Watch', category: 'Accessories', price: 185.41},
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
                <CartProductImg source={item.img} />

                <CartProductInfo>
                    <CartProductName>{item.name}</CartProductName>
                    <CartProductCategory>{item.category}</CartProductCategory>
                    <CartProductPrice>{item.price}</CartProductPrice>
                </CartProductInfo>

                <CartQuantity>
                    <CartQuantityChange>-</CartQuantityChange>
                    <CartQuantityValue>{quantity}</CartQuantityValue>
                    <CartQuantityChange>+</CartQuantityChange>
                </CartQuantity>
            </CartArea>
        )
    }

    return(
        <CartContainer>
            {emptyCart ? 
                <EmptyCartComponent />
            : 
                <FlatList
                    contentContainerStyle={{paddingTop: 40}}
                    ListHeaderComponent={<CartTitle>Cart</CartTitle>}
                    data={productArray}
                    renderItem={({ item }) => <CartIsNotEmptyComponent item={item} />}
                    keyExtractor={(item) => item.id}
                />
            }
        </CartContainer>
    )
}