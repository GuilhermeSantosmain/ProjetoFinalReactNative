import React  from 'react';
import { View, StyleSheet } from 'react-native'
import Slider from  '../Slider/slider'



const images =[
    'https://images.lojanike.com.br/500x500/produto/tenis-nike-sb-nyjah-free-2-unissex-BV2078-103-1.jpg',
    'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-excee-masculino-CD4165-100-1.png',
    'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-97-edicao-especial-masculino-DC3986-100-1.jpg',
    'https://images.lojanike.com.br/500x500/produto/tenis-air-force-1-07-s50-DA8478-101-1-11621541005.jpg',
]
    

export default class Carrousel extends React.Component{

    render(){
       return (
           <View style={style.container}>
               <Slider images={images} />
           </View>
       ) 
    }
}

const style= StyleSheet.create({
    container:{
        backgroundColor: '#000',
        height: 300
    },
})