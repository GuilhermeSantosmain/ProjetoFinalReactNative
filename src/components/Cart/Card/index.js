import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../../helpers/dimensions';
import { AuthContext } from '../../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductCard = ({ item, navigation, key }) => {
    const { cart, setCart } = useContext(AuthContext)
    function handleDelete() {
        setCart(cart.filter(v => v !== item))
        storageCart(cart.filter(v => v !== item))
    }

    async function storageCart(data) {
        await AsyncStorage.setItem('Cart_user', JSON.stringify(data))
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { item })}>
            <View style={styles.card}>

                <View>
                    <Image source={{ uri: item.url }} style={styles.img} />
                </View>
                <View style={styles.txt}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.title}>R$ {item.preco}</Text>

                    <TouchableOpacity style={styles.btn}>
                        <TouchableOpacity onPress={() => handleDelete()}>
                            <Text style={styles.txtBtn}>Remover do carrinho</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >)

};

const styles = StyleSheet.create({
    img: {
        width: 130,
        height: 130,
    },

    card: {
        height: windowHeight / 4,
        width: windowWidth / 1.1,
        flexDirection: 'row',
        shadowColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
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
        fontWeight: '400'
    },

    btn: {
        backgroundColor: '#ad1f15',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 2,
        marginTop: 10
    },

    txtBtn: {
        padding: windowWidth / 55,
        width: '100%',
        fontSize: 16,
        fontWeight: '500'
    },

    txt: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ProductCard