import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../contexts/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { windowWidth } from '../../helpers/dimensions'

const Product = ({ route, navigation }) => {
    const { http, setCart, cart } = useContext(AuthContext)
    const { item } = route.params
    const [produto, setProduto] = useState({})
    const [quantidade, setQuantidade] = useState(null)

    useEffect(() => {
        http.get('produto/' + item.nome).then(response => setProduto(response.data))
    }, [])

    async function addToCart() {
        if (quantidade != null) {
            let produtoCart = {
                nome: produto.nome,
                preco: produto.preco,
                quantidade: quantidade,
                url: produto.url
            }
            let array = []
            setCart((oldCart) => {
                array = [...oldCart, produtoCart]
                return [...oldCart, produtoCart]
            })
            storageCart(array)
            alert('Produto adicionado ao carrinho')
        } else {
            alert('Informe a quantidade')
        }
    }


    // async function teste(produtoCart) {
    //     
    // }

    async function storageCart(data) {
        await AsyncStorage.setItem('Cart_user', JSON.stringify(data))
    }

    return (
        <View>

            <View style={styles.titulo}>
                <Text style={styles.nome}> {produto.nome}</Text>
                <Text style={styles.preco}> R$ {produto.preco}</Text>
             </View>

            <View style={styles.capaImg}>
                <Image  source={produto.url} style={styles.img} />
            </View>

            <View>
              
                <View>
                    <Text> {produto.descricao}</Text>
                    <TextInput keyboardType='numeric' maxLength={produto.quantidade} onChangeText={(e) => setQuantidade(e)} />
                </View>
            </View>

            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => addToCart()}>
                <Text>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    capaImg:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },

    img:{
      width: windowWidth / 1.3,
      height: windowWidth / 1.3,
    },

    titulo:{
        justifyContent:'center',
        alignItems: 'center',
    },

    nome:{
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
    },

    preco:{
        fontSize: 16,
        fontWeight: '700'
    }
})