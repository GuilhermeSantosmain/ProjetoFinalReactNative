import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from "./styles"

const Cart = () => {

    return(
        <View style={styles.cart}>
            <View style={styles.header}>
                <Text style={styles.title}>CARRINHO</Text>
            </View>
        </View>
    )
}

export default Cart;