import React from 'react';
import { FlatList } from 'react-native';

import {
    CategoryContainer,
    CategoryTitle,
    CategoryItem,
    CategoryItemTitle,
    CategoryImg
} from './styles';

export default function Home() {
    const categoryArray = [
        { id: 1, title: 'Men', img: require('../../assets/img/men.png') },
        { id: 3, title: 'Women', img: require('../../assets/img/women.png') },
        { id: 2, title: 'Kids', img: require('../../assets/img/kid.png') },
        { id: 4, title: 'New Collection', img: require('../../assets/img/new_collection.png') },
    ];

    const CategoryComponent = ({ item }) => {
        return (
            <CategoryItem>
                <CategoryItemTitle>{item.title}</CategoryItemTitle>
                <CategoryImg resizeMode="center" source={item.img} />
            </CategoryItem>
        )
    }

    return (
        <CategoryContainer>
            <FlatList
                ListHeaderComponent={<CategoryTitle>Categories</CategoryTitle>}
                data={categoryArray}
                renderItem={({ item }) => <CategoryComponent item={item} />}
                keyExtractor={(item) => item.id}
            />
        </CategoryContainer>
    )
}