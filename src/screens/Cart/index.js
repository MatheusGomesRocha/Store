import React, { useState } from 'react';

import EmptyCartIcon from '../../assets/svg/empty_cart.svg';

import {
    CartContainer,

    EmptyCartArea,
    EmptyCartTitle,
    EmptyCartText,
    EmptyCartButton,
    EmptyCartButtonText
} from './styles';

export default function Home() {
    const [emptyCart, setEmptyCart] = useState(true);

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

    return(
        <CartContainer>
            {emptyCart ? 
                <EmptyCartComponent />
            : 
                undefined
            }
        </CartContainer>
    )
}