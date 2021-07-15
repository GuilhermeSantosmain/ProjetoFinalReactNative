import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../contexts/auth'

const Product = ({ route, navigation }) => {
    const { http } = useContext(AuthContext)
    const { item } = route.params
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produto/' + item.nome).then(response => setProduto(response.data))
    }, [])

    return (
        <View>
            <Text> {produto.nome}</Text>
        </View>
    )
}

export default Product