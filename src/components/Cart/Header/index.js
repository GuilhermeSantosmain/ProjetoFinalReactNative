import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles"
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

        const navigation = useNavigation();  
    
    return(
   
            <View style={styles.header}>
                <Text style={styles.title}>CARRINHO</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <AntDesign style={styles.profileIcon} name="user" size={25} />
                </TouchableOpacity>
            </View>
  
    )
}

export default Header;