import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'


function ProductRegister() {
    const navigation = useNavigation();
    const { http } = useContext(AuthContext)

    const [codigo, setCodigo] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')

    const [newProduct, setNewProduct] = useState({})
    const [newCategory, setNewCategory] = useState({})

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
    async function handleNewCategory() {
        const categoria = {
            nome: nomeCategoria,
            descricao: descricaoCategoria
        }
        setNewCategory(categoria)
        http.post('categoria', newCategory).then(console.log("categoria cadastrada")).catch(erro => console.log(erro))

    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>

            <View style={styles.inputTxt} >
                    <View style={styles.inputTxtRow}>
                        <Text>Codigo do Produto</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNomeCategoria(e) } value={nomeCategoria} />
                    </View>
                        
                    <View style={styles.inputTxtRow}>
                        <Text>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setDescricaoCategoria(e) } value={descricaoCategoria} />
                    </View>
                    
                                                    

                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewCategory}>
                        <Text style={styles.msgBtn}>Cadastrar Categoria</Text>

                    </TouchableOpacity>
                </View>


                <View style={styles.inputTxt} >
                    <View style={styles.inputTxtRow}>
                        <Text>Codigo do Produto</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setCodigo(e) } value={codigo}/>
                    </View>
                        
                    <View style={styles.inputTxtRow}>
                        <Text>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNomeProduto(e) } value={nomeProduto}/>
                    </View>
                    
                    <View style={styles.inputTxtRow}>
                        <Text>Descrição</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setDescricaoProduto(e) } value={descricaoProduto}/>
                    </View>
                    
                    <View style={styles.inputTxtRow}>
                        <Text>Preço</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setPreco(e) } value={preco}/>
                    </View>
                    
                    <View style={styles.inputTxtRow}>
                        <Text>Quantidade de estoque</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setQuantidadeEstoque(e) } value={quantidadeEstoque}/>
                    </View>
                    
                    <View style={styles.inputTxtRow}>
                        <Text>Categoria</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setCategoria(e) } value={categoria}/>
                    </View>              
                    

                </View>
                <View style={styles.msgCadastro}>
                    <TouchableOpacity onPress={handleNewProduct}>
                        <Text style={styles.msgBtn}>Cadastrar Produto</Text>

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
    inputTxtRow:{
        flexDirection:"row"
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
