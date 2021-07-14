import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'


function CategoryRegister() {
    const navigation = useNavigation();
    const { http, setCategorias } = useContext(AuthContext)
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')

    async function handleNewCategory() {
        const categoria = {
            nome: nomeCategoria,
            descricao: descricaoCategoria
        }
        await http.post('categoria', categoria)
            .catch(error => console.warn(error))

    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <View style={styles.inputTxtRow}>
                        <Text>Nome da categoria</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNomeCategoria(e)} value={nomeCategoria} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Descricao</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setDescricaoCategoria(e)} value={descricaoCategoria} />
                    </View>



                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewCategory}>
                        <Text style={styles.msgBtn}>Cadastrar Categoria</Text>

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
