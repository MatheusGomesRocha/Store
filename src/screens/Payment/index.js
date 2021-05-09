import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import {
    PaymentContainer,

    PaymentTitle,
    PaymentSmallerTitle,

    PaymentItemContainer,
    PaymentItemTitle,
    PaymentItemButtonArea,
    PaymentItemButton,
    PaymentItemButtonText,

    PaymentItemDetailsArea,
    PaymentItemInputArea,
    PaymentItemLabel,
    PaymentItemInput,
    PaymentItemInputAreaRow,

    PaymentInfoContainer,
    PaymentInfoHeader,
    PaymentInfoTitle,
    PaymentInfoPrice,
    PaymentInfoBlock,
    PaymentInfoBlockLabel,
    PaymentInfoBlockText,
    PaymentPayButton,
    PaymentPayButtonText
} from './styles';

export default () => {
    const [payType, setPayType] = useState('card');

    return(
        <PaymentContainer>
            <ScrollView contentContainerStyle={{paddingVertical: 50, paddingHorizontal: 20}}>
                <PaymentTitle>Confirm order and pay</PaymentTitle>
                <PaymentSmallerTitle>Please make the payment, after that you can wait to your products</PaymentSmallerTitle>

                <PaymentItemContainer>
                    <PaymentItemTitle>Payment methods</PaymentItemTitle>

                    <PaymentItemButtonArea>
                        <PaymentItemButton borderC={payType === 'bank' && '#fe705f'} borderW={payType === 'bank' && '1px'} background={payType === 'bank' && '#F8E3D3'} onPress={() => setPayType('bank')}>
                            <PaymentItemButtonText>Bank card</PaymentItemButtonText>
                        </PaymentItemButton>

                        <PaymentItemButton borderC={payType === 'pix' && '#fe705f'} borderW={payType === 'pix' && '1px'} background={payType === 'pix' && '#F8E3D3'} onPress={() => setPayType('pix')}>
                            <PaymentItemButtonText>PIX</PaymentItemButtonText>
                        </PaymentItemButton>

                        <PaymentItemButton borderC={payType === 'money' && '#fe705f'} borderW={payType === 'money' && '1px'} background={payType === 'money' && '#F8E3D3'} onPress={() => setPayType('money')}>
                            <PaymentItemButtonText>Money</PaymentItemButtonText>
                        </PaymentItemButton>
                    </PaymentItemButtonArea>

                    <PaymentItemDetailsArea>
                        <PaymentItemTitle>Payment details</PaymentItemTitle>

                        <PaymentItemInputArea>
                            <PaymentItemLabel>Cardholder Name</PaymentItemLabel>
                            <PaymentItemInput defaultValue="Matheus Gomes" />
                        </PaymentItemInputArea>

                        <PaymentItemInputArea>
                            <PaymentItemInput placeholderTextColor="#afb2b1" placeholder="Card number" />
                        </PaymentItemInputArea>
                        
                        <PaymentItemInputAreaRow>
                            <PaymentItemInput style={{width: '48%'}} placeholderTextColor="#afb2b1" placeholder="Date" />

                            <PaymentItemInput style={{width: '48%', marginLeft: '4%'}} placeholderTextColor="#afb2b1" placeholder="CCV" />
                        </PaymentItemInputAreaRow>
                    </PaymentItemDetailsArea>
                </PaymentItemContainer>

                <PaymentInfoContainer>
                    <PaymentInfoHeader>
                        <PaymentInfoTitle>You have to pay</PaymentInfoTitle>
                        <PaymentInfoPrice>147.85 BRL</PaymentInfoPrice>
                    </PaymentInfoHeader>

                    <PaymentInfoBlock>
                        <PaymentInfoBlockLabel>Company</PaymentInfoBlockLabel>
                        <PaymentInfoBlockText>Store</PaymentInfoBlockText>
                    </PaymentInfoBlock>

                    <PaymentInfoBlock>
                        <PaymentInfoBlockLabel>Order Number</PaymentInfoBlockLabel>
                        <PaymentInfoBlockText>1148152</PaymentInfoBlockText>
                    </PaymentInfoBlock>

                    <PaymentInfoBlock>
                        <PaymentInfoBlockLabel>Service</PaymentInfoBlockLabel>
                        <PaymentInfoBlockText>Products Order</PaymentInfoBlockText>
                    </PaymentInfoBlock>
                </PaymentInfoContainer>

                <PaymentPayButton>
                    <PaymentPayButtonText>Pay 147.85 BRL</PaymentPayButtonText>
                </PaymentPayButton>
            </ScrollView>
        </PaymentContainer>
    )
}