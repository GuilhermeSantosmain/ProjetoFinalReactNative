import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../contexts/auth';

const Body = () => {
    const { cart, closeBuy } = useContext(AuthContext)
    const navigation = useNavigation();
    if (cart.length === 0) {
        return (
            <View style={styles.body}>
                <Text style={styles.title}>Seu carrinho está vazio</Text>
                <Text style={styles.description}>O que é isto? Que tal um pouco de criatividade?</Text>
                <TouchableOpacity style={styles.bnt} onPress={() => navigation.navigate('Products')}><Text style={styles.bntText}> Vá para produtos </Text></TouchableOpacity>
            </View>
        )

    } else {
        return (
            <View>
                <TouchableOpacity onPress={() => closeBuy()}>
                    <Text>
                        Finalizar compra
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Body