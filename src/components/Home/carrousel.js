import React  from 'react';
import { View, StyleSheet } from 'react-native'
import Slider from  '../Slider/slider'



const images =[
    'https://i.pinimg.com/originals/65/58/2b/65582b768473cefd516a9542349bc084.png',
    'https://www.playmakerbrasil.com.br/sites/default/files/wp-content/uploads/2019/08/Nike-Air-Jordan-1-OG-Ad.jpeg',
    'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-97-edicao-especial-masculino-DC3986-100-1.jpg',
    'https://s3.amazonaws.com/nikeinc/assets/50814/15-600_Nike_Kyrie_2_Hero-01_native_1600.jpg?1449529832',
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
        height: 350
    },
})