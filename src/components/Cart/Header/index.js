import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles"
import {AntDesign} from '@expo/vector-icons';

const Header = () => {

    return(
   
            <View style={styles.header}>
                <Text style={styles.title}>CARRINHO</Text>
                <AntDesign style={styles.profileIcon} name="user" size={25} />
            </View>
  
    )
}

export default Header;