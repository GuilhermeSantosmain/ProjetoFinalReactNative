import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import Products from '../../components/Products'
import { AuthContext } from '../../contexts/auth'

const Home = () => {
    const { produtos } = useContext(AuthContext)


    return (
        <View>
            {/* <FlatList
                data={produtos}
                renderItem={({ item }) => <Products item={item} />}
                keyExtractor={item => item.key}
            /> */}
        </View>
    )
}

export default Home;