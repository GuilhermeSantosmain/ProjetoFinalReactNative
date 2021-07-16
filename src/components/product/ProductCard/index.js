import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../../helpers/dimensions';

const ProductCard = ({ item, navigation }) => {
    return (
     
    <TouchableOpacity onPress={() => navigation.navigate('Product', { item })} style={styles.iconsBtn}>
        <View>
            <Image source={{ uri: item.url }} style={styles.img} />

            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.title}>{item.preco}</Text>
        </View>
    </TouchableOpacity>
)

};

export default ProductCard

const styles = StyleSheet.create({
    img: {
        width: windowWidth / 3,
        height: windowWidth / 3,
    },

    iconsBtn: {
        width: 150,
    },
})


