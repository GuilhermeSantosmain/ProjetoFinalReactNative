import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

const Body = () => {

    const navigation = useNavigation();
    // if(produtos === null)
    return (
    <View style={styles.body}>
        <Text style={styles.title}>Seu carrinho está vazio</Text>
        <Text style={styles.description}>O que é isto? Que tal um pouco de criatividade?</Text>
        <TouchableOpacity style={styles.bnt} onPress={() => navigation.navigate('Products')}><Text style={styles.bntText}> Vá para produtos </Text></TouchableOpacity>
    </View>
    )
    //else return (produtos)
}

export default Body