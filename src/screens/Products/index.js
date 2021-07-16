import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Products/Header/index';
import Body from '../../components/Products/Body/index';
import { windowWidth, windowHeight } from '../../helpers/dimensions'

const Products = () => {

    return (
        <ScrollView>
        <View >
        <Header />
            <Text style={styles.titulo}>Nossos Produtos:</Text>
           
            <Body />
        </View>
        </ScrollView>
    )
}

export default Products;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 22,
        fontWeight: '700',
        marginLeft: windowWidth / 14 ,
        marginTop: windowWidth / 20,
        marginBottom: windowWidth / 20,
    },
})