import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ScrollItens from '../../components/Home/ScrollItens'
import Carrousel from '../../components/Home/carrousel'
import ImagemHome1 from '../../components/Home/ImagemHome1'
import ImagemHome2 from '../../components/Home/propagandaAdidas'
import Footer from '../../components/Home/footer'
function Home() {

    return (
   
           <ScrollView
           showsVerticalScrollIndicator={false}
           style={styles.container}>

                <Carrousel />

                <ScrollItens/>

                <ImagemHome1 />

                <ScrollItens/>

                <ImagemHome2 />

                <Footer />

            </ScrollView>
       
    )
}

export default Home;

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
})