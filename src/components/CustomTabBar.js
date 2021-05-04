import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/svg/home.svg';
import CategoriesIcon from '../assets/svg/layers.svg';
import CartIcon from '../assets/svg/shopping-basket.svg';
import ProfileIcon from '../assets/svg/user.svg';
import {View} from 'react-native';

import {white, defaultColor, gray500, gray100, gray200} from '../styles';

const CustomTabBarContainer = styled.View`
    flex-direction: row;
    background: #000;
    border-width: 1px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-color: ${gray100};
    height: 72px;
    padding: 0 8px;
    display: ${props=>props.display || 'flex'};
`;
const CustomTabBarTouch = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 25%;
`;
const CustomTabBarPressed = styled.View`
    background: ${props=>props.background || 'transparent'};
    padding: 10px 15px;
    border-radius: 20px;
    flex-direction: row;
`;
const Texto = styled.Text`
    color: ${white};
    margin-left: 10px;
`;

const backgroundPressed = '#F8DAD6';

export default ({ state, descriptors, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <View style={{backgroundColor: white}}>
            <CustomTabBarContainer>

                <CustomTabBarTouch key={index} onPress={() => goTo('home')}>
                    <CustomTabBarPressed background={state.index === 0 && "rgba(255, 255, 255, 0.2)"} >
                        <HomeIcon fill={state.index == 0 ? white : gray500} width="23px" height="23px"/>
                        {state.index == 0 &&
                            <Texto>Home</Texto>
                        }
                    </CustomTabBarPressed>
                </CustomTabBarTouch>

                <CustomTabBarTouch key={index} onPress={() => goTo('cart')}>
                    <CustomTabBarPressed background={state.index === 1 && "rgba(255, 255, 255, 0.2)"}>
                        <CartIcon fill={state.index == 1 ? white : gray500} width="23px" height="23px"/>
                        {state.index == 1 &&
                            <Texto>Cart</Texto>
                        }
                    </CustomTabBarPressed>
                </CustomTabBarTouch>

                <CustomTabBarTouch key={index} onPress={() => goTo('categories')}>
                        <CustomTabBarPressed background={state.index === 2 && "rgba(255, 255, 255, 0.2)"}>
                            <CategoriesIcon fill={state.index == 2 ? white : gray500} width="23px" height="23px"/>
                            {state.index == 2 &&
                                <Texto>Filtros</Texto>
                            }
                        </CustomTabBarPressed>
                </CustomTabBarTouch>

                <CustomTabBarTouch key={index} onPress={() => goTo('profile')}>
                        <CustomTabBarPressed background={state.index === 3 && "rgba(255, 255, 255, 0.2)"}>
                            <ProfileIcon fill={state.index == 3 ? white : gray500} width="23px" height="23px"/>
                            {state.index == 3 &&
                                <Texto>Perfil</Texto>
                            }
                        </CustomTabBarPressed>
                </CustomTabBarTouch>

            </CustomTabBarContainer>
        </View>
    );
}