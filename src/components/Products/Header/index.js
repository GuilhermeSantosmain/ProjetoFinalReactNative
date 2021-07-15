import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const navigation = useNavigation();    
    return(

            <View style={styles.header}>
                <Text style={styles.title}>PRODUTOS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <AntDesign style={styles.profileIcon} name="user" size={25} />
                </TouchableOpacity>
            </View>
  
    )
}

export default Header;

const styles = StyleSheet.create({
    profileIcon: {
       paddingRight:15
    },
    header: {
        borderBottomWidth: 0.5,
        borderColor: "#aaa",
        flexDirection:'row',
        justifyContent: "space-between",
        height: 60,
        alignItems: "center"
        
    },
    title :{        
        fontWeight:"bold",
        paddingLeft: 15
    },
  });