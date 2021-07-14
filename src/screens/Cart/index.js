import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from "./styles"
import Header from '../../components/Cart/Header';
import Body from '../../components/Cart/Body';

const Cart = () => {

    return (
        <View style={styles.cart}>
            <Header />
            <Body />
        </View>
    )
}

export default Cart;