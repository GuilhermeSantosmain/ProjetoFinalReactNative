import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react/cjs/react.development';


function ProductRegister() {
    const navigation = useNavigation();
    const { http, categorias, setCategorias } = useContext(AuthContext)

    const [codigo, setCodigo] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')

    const [newProduct, setNewProduct] = useState({})


    async function handleNewProduct() {
        const produto = {
            codigo: codigo,
            nome: nomeProduto,
            descricao: descricaoProduto,
            preco: preco,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria
        }
        console.log(produto)
        setNewProduct(produto)
        http.post('produto', newProduct).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
    }

    useEffect(() => {
        http.get('categoria/todas').then((response) => { setCategorias(response.data) })
    })


    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>


                <View style={styles.inputTxt} >
                    <View style={styles.inputTxtRow}>
                        <Text>Codigo do Produto</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setCodigo(e)} value={codigo} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNomeProduto(e)} value={nomeProduto} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Descrição</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setDescricaoProduto(e)} value={descricaoProduto} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Preço</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setPreco(e)} value={preco} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Quantidade de estoque</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setQuantidadeEstoque(e)} value={quantidadeEstoque} />
                    </View>

                    <View style={styles.inputTxtRow}>
                        <Text>Categoria</Text>
                        <Picker
                            style={{ width: 50, height: 50 }}
                            selectedValue={"Nada"}
                            onValueChange={(itemValue) =>
                                setCategoria(itemValue)
                            }>
                            {categorias.map((item) => {

                                return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                            })}


                        </Picker>
                    </View>


                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewProduct}>
                        <Text style={styles.msgBtn}>Cadastrar Produto</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View >
    );
}


export default ProductRegister;


const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTxtRow: {
        flexDirection: "row"
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
