import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../contexts/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
                quantidade: quantidade
            }
            await setCart(oldCart => [...oldCart, produtoCart])
            storageCart(cart)
            alert('Produto adicionado ao carrinho')
        } else {
            alert('Informe a quantidade')
        }

    }

    async function storageCart(data) {
        await AsyncStorage.setItem('Cart_user', JSON.stringify(data))
    }

    return (
        <View>
            <Text> {produto.nome}</Text>
            <Text> {produto.preco}</Text>
            <Text> {produto.descricao}</Text>
            <TextInput keyboardType='numeric' maxLength={produto.quantidade} onChangeText={(e) => setQuantidade(e)} />
            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => addToCart()}>
                <Text>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product