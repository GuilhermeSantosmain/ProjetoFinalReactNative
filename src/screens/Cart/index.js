import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import styles from "./styles"
import Header from '../../components/Cart/Header';
import Body from '../../components/Cart/Body';

const Cart = () => {

    return (
        <ScrollView>
            <View style={styles.cart}>
                <Header />
                <Body />
            </View>
        </ScrollView>
    )
}

export default Cart;