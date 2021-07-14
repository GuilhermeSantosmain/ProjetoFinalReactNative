import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'


function CategoryRegister() {
    const navigation = useNavigation();
    const { } = useContext(AuthContext)

    const [produtc, setNewCategory] = useState('')

    async function handleNewCategory() {

    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput style={styles.input} onChange={(e) => setNewCategory(e.target.value)} />
                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewCategory}>
                        <Text style={styles.msgBtn}>Cadastrar</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default CategoryRegister;


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
