import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../../helpers/dimensions';

const ProductCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { item })}>
            <View style={styles.card}>
                <Image source={{ uri: item.url }} style={styles.img} />
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.title}>R$ {item.preco}</Text>
            </View>
        </TouchableOpacity >)

};

const styles = StyleSheet.create({
    img: {
        width: windowWidth/1.9,
        height: windowWidth/2.4,
    },

    card: {
        height: windowHeight / 3,
        width: windowWidth / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        width: 130,
    },
})


export default ProductCard