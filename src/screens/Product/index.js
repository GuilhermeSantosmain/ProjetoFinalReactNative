import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../contexts/auth'

const Product = ({ route, navigation }) => {
    const { http, setCart, cart } = useContext(AuthContext)
    const { item } = route.params
    const [produto, setProduto] = useState({})
    const [quantidade, setQuantidade] = useState('')

    useEffect(() => {
        http.get('produto/' + item.nome).then(response => setProduto(response.data))
    }, [])

    function addToCart() {
        let produtoCart = {
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidade
        }
        setCart(oldCart => [...oldCart, produtoCart])
        console.warn(cart)
        alert('Produto adicionado ao carrinho')
    }

    return (
        <View>
            <Text> {produto.nome}</Text>
            <Text> {produto.preco}</Text>
            <Text> {produto.descricao}</Text>
            <TextInput keyboardType='numeric' maxLength={produto.quantidade} />
            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => addToCart()}>
                <Text>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product