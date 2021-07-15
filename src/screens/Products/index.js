import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import Header from '../../components/Products/Header/index';
import Body from '../../components/Products/Body/index';

const Products = () => {

    return (
        <ScrollView>
        <View >
            <Header />
            <Body />
        </View>
        </ScrollView>
    )
}

export default Products;