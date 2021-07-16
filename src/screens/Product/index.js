import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../contexts/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { windowWidth, windowHeight } from '../../helpers/dimensions'
import { AntDesign } from '@expo/vector-icons'


const Product = ({ route, navigation }) => {
    const { http, setCart, cart } = useContext(AuthContext)
    const { item } = route.params
    const [produto, setProduto] = useState({})
    const [quantidade, setQuantidade] = useState(null)
    const [count, setCount] = useState(0);
    const add = () => setCount(incremento => {
            setQuantidade(incremento + 1)
            return incremento + 1
            });

    const deletar = () => {if(count<= 0){} else{setCount(decremento =>{
        setQuantidade(decremento - 1)
        return decremento - 1})}}  ;


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
        <ScrollView
        showsHorizontalScrollIndicator={false}
        >

            <View style={styles.shoes}>
                <View style={styles.titulo}>
                    <Text style={styles.nome}> {produto.nome}</Text>
                    <Text style={styles.preco}> R$ {produto.preco}</Text>
                </View>

                <View style={styles.capaImg}>
                    <Image  source={produto.url} style={styles.img} />
                </View>

                <View>
                
                    <View style={styles.cxDescricao}>
                        <Text style={styles.descricao}> {produto.descricao}</Text>
                    </View>
                </View>

                <View style={styles.cont}>
                    <Text style={styles.qtdTitulo}>Quantidade:</Text>
                    <View style={styles.contador}>

                        <TouchableOpacity style={styles.button} onPress={add}>
                            <AntDesign name="plus" color="#000" size={25} /> 
                        </TouchableOpacity>

                        <View style={styles.cxQtd}>
                            <Text style={styles.qtd}> {count}</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={deletar}>
                            <AntDesign name="minus" color="#000" size={25} /> 
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity style={styles.btn} onPress={() => addToCart()}>
                    <Text style={styles.btnTxt}>
                        Adicionar ao Carrinho
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default Product

const styles = StyleSheet.create({
    shoes:{
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
    },

    btn:{
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.6,
        backgroundColor: '#000',
    },

    btnTxt:{
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    cxDescricao:{
        width: windowWidth / 1.1,
    },

    descricao:{
        fontSize: 17,
        textAlign: 'center',
    },

    qtdTitulo:{
        fontSize: 18,
        fontWeight: '700'
    },

    cont:{
        padding: windowWidth / 30,
        alignItems: 'center',
        justifyContent:'center'
    },

    contador:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    },

    button:{
        padding: windowWidth / 45,
    },

    qtd:{
        fontSize: 18,
    }

})