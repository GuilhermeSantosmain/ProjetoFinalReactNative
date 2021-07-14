import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import Products from '../../components/Products'
import { AuthContext } from '../../contexts/auth'



const itens = [
    {
        id: 'ABC',
        url: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-sb-nyjah-free-2-unissex-BV2078-103-1.jpg',
        nome: 'Tênis Nike SB Nyjah Free 2 Unissex',
        preco: 'R$ 699,99',

    },
    {
        id: 'ABCD',
        url: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-97-masculino-DB4611-002-1.jpg',
        nome: 'Tênis Nike Air Max 97 Masculino',
        preco: 'R$ 519,99',
    },
    {
        id: 'ABCDE',
        url: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-zoom-gt-cut-unissex-CZ0175-101-1.jpg',
        nome: 'Tênis Nike Air Zoom G.T. Cut Unissex',
        preco: 'R$ 1.099,99'
    },
    {
        id: 'ABCDEF',
        url: 'https://images.lojanike.com.br/500x500/produto/tenis-kyrie-7-seasonal-CZ0141-100-1.jpg',
        nome: 'Tênis Nike Kyrie 7 Masculino',
        preco: 'R$ 749,99'
    },
    {
        id: 'ABCDEFG',
        url: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-zm950-masculino-CJ6700-001-1.jpg',
        nome: 'Tênis Nike Air Max ZM950 Masculino',
        preco: 'R$ 619,99 '
    },
]

const renderItem = ({ item }) => (
  
        <TouchableOpacity style={styles.iconsBtn}>
            <View>
                <Image source={{uri: item.url}} style={styles.img} />
                
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.title}>{item.preco}</Text>
            </View>
        </TouchableOpacity>
  
  );


const Home = () => {
    const { produtos } = useContext(AuthContext)


  

    return (
        <View>
            {/* <FlatList
                data={produtos}
                renderItem={({ item }) => <Products item={item} />}
                keyExtractor={item => item.key}
            /> */}
        
             
                    <SafeAreaView style={styles.linhaIcons}>
                    <FlatList
                        data={itens}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
      
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    img:{ 
        width: 120,
        height:70,
    },

    iconsBtn:{
        width: 150,
    },
    linhaIcons:{
        marginLeft: 15,
    }

    
})