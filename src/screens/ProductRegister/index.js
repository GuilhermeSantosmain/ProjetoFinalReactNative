import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'


function ProductRegister() {
    const navigation = useNavigation();

    const [produtc, setNewProduct] = useState('')

    async function handleNewProduct() {

    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput style={styles.input} onChange={(e) => setNewProduct(e.target.value)} />
                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewProduct}>
                        <Text style={styles.msgBtn}>Cadastrar</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default ProductRegister;


const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputTxt: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        width: 250,
        padding: 10,
        marginBottom: 20
    },

    input: {
        borderColor: '#000',
        borderBottomWidth: 2,
        width: '100%',
        height: 40,
        padding: 10
    },

    msgCadastro: {
        marginTop: 20,
        flexDirection: 'row',
    },

    msg: {
        fontSize: 16
    },

    msgBtn: {
        fontSize: 16,
        color: '#29d97b'
    }

});
