import React from 'react'
import { View } from 'react-native'
import ScrollItens from '../../components/Home/ScrollItens'
import Carrousel from '../../components/Home/carrousel'

function Home() {

    return (
        <View>
           
            <Carrousel />

           <ScrollItens/>
        </View>
    )
}

export default Home;