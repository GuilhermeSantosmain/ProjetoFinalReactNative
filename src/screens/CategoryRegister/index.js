import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
            navigation.goBack()
    }

    return (
        // <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <View style={styles.inputTxtRow}>
                        <Text style={styles.inputText}>Nome da categoria</Text>
                        <TextInput style={styles.input} placeholder="Nome" onChangeText={(e) => setNomeCategoria(e)} value={nomeCategoria} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text style={styles.inputText}>Descricao</Text>
                        <TextInput style={styles.input} placeholder="Descrição" onChangeText={(e) => setDescricaoCategoria(e)} value={descricaoCategoria} />
                    </View>

                    <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewCategory}>
                        <Text style={styles.msgBtn}>Cadastrar Categoria</Text>

                    </TouchableOpacity>
                </View>

                </View>
 
            </View>

        </View>

        // </TouchableWithoutFeedback>
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

    inputTxtRow:{
        marginTop: 12,
    },

    input: {
        borderColor: '#666',
        borderWidth: 0.5,
        borderRadius: 5,
        width: '100%',
        height: 40,
        padding: 10,
    },

    msgCadastro: {
        marginTop: 20,
        backgroundColor: '#000',
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    msgBtn: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },

    inputText:{
        fontSize: 16,
        fontWeight: 'bold'
    },

});
