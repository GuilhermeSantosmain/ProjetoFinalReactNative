import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../helpers/dimensions'
import Icon from '@expo/vector-icons/AntDesign';

const Footer = () => {


    return (
        <View style={styles.container}>

            <View style={styles.enunciadoGeral}>

                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/GuilhermeSantosmain/ProjetoFinalReactNative')}>

                    <Icon name="github" size={30} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.txt}>© 2021 Nossa Marca. Todos os direitos reservados. </Text>

            </View>

        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginTop: 0,
        padding: 20,
        marginBottom: 0,
    },

    txt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "400",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    enunciadoGeral: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})