import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/svg/home.svg';
import CategoriesIcon from '../assets/svg/menu-grid.svg';
import CartIcon from '../assets/svg/shopping-basket.svg';
import ProfileIcon from '../assets/svg/user.svg';
import {View} from 'react-native';

import {lightDefaultColor, gray500} from '../styles';

const CustomTabBarContainer = styled.View`
    flex-direction: row;
    background: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-width: 1px;
    border-bottom-width: 0;
    border-color: #ddd;
    height: 62px;
    padding: 0 5px;
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
    color: #fff;
    margin-left: 10px;
`;

export default ({ state, descriptors, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <View style={{backgroundColor: '#fff'}}>
            <CustomTabBarContainer>
            <CustomTabBarTouch key={index} onPress={() => goTo('home')}>
                <CustomTabBarPressed background={state.index == 0 && lightDefaultColor} >
                    <HomeIcon fill={state.index == 0 ? '#fff' : gray500} width="23px" height="23px"/>
                    {state.index == 0 && 
                        <Texto>Home</Texto>
                    }
                </CustomTabBarPressed>
            </CustomTabBarTouch>

            <CustomTabBarTouch background={state.index == 1 && '#efaba1'} key={index} onPress={() => goTo('categories')}>
                    <CustomTabBarPressed background={state.index == 1 && lightDefaultColor} >
                        <CategoriesIcon fill={state.index == 1 ? '#fff' : gray500} width="23px" height="23px"/>
                        {state.index == 1 && 
                            <Texto>Filtros</Texto>
                        }
                    </CustomTabBarPressed>
            </CustomTabBarTouch>
        
            <CustomTabBarTouch background={state.index == 2 && lightDefaultColor} key={index} onPress={() => goTo('cart')}>
                    <CustomTabBarPressed background={state.index == 2 && lightDefaultColor} >
                        <CartIcon fill={state.index == 2 ? '#fff' : gray500} width="23px" height="23px"/>
                        {state.index == 2 && 
                            <Texto>Carrinho</Texto>
                        }
                    </CustomTabBarPressed>
            </CustomTabBarTouch>

            <CustomTabBarTouch key={index} onPress={() => goTo('profile')}>
                    <CustomTabBarPressed background={state.index == 3 && '#efaba1'}>
                        <ProfileIcon fill={state.index == 3 ? '#fff' : gray500} width="23px" height="23px"/>
                        {state.index == 3 && 
                            <Texto>Perfil</Texto>
                        }
                    </CustomTabBarPressed>
            </CustomTabBarTouch>
        </CustomTabBarContainer>
        </View>
    );
}