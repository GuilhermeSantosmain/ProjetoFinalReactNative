import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react/cjs/react.development';
import styles from './styles'


function ProductEdit() {
    const navigation = useNavigation();
    const { http, produtos } = useContext(AuthContext)

    const [codigo, setCodigo] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')

    const [novoCodigo, setNovoCodigo] = useState('')
    const [novaDescricaoProduto, setNovaDescricaoProduto] = useState('')
    const [novaQuantidadeEstoque, setNovaQuantidadeEstoque] = useState('')
    const [novoNomeProduto, setNovoNomeProduto] = useState('')
    const [novoPreco, setNovoPreco] = useState('')
    const [novaCategoria, setNovaCategoria] = useState('')

    const [produto, setProduto] = useState({})


    async function handleProduct() {
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
        http.put('produto', produto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
    }

    async function handleProductEdit(id) {
        await http.get('produto/' + {id}).then((response) => { 
            setCodigo(response.data.codigo)
            setDescricaoProduto(response.data.descricao)
            setQuantidadeEstoque(response.data.quantidadeEstoque)
            setNomeProduto(response.data.nome)
            setPreco(response.data.preco)
            setCategoria(response.data.categoria)})
        
        console.log(produto)
    }
    useEffect(() => {
        http.get('produto/todos').then((response) => { setCategorias(response.data) })
    })


    return (
        <View style={styles.body}>
            <View style={styles.form}>


                <View style={styles.inputs}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Produto</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={""}
                            onValueChange={(itemValue) => handleProductEdit(itemValue)}>
                            {produtos.map((item) => {

                                return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                            })}


                        </Picker>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Codigo do Produto</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNovoCodigo(e)} defaultValue={codigo} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNovoNomeProduto(e)} defaultValue={nomeProduto} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Descrição</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNovaDescricaoProduto(e)} defaultValue={descricaoProduto} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Preço</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNovoPreco(e)} defaultValue={preco} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Quantidade de estoque</Text>
                        <TextInput  style={styles.input} onChangeText={(e) => setNovaQuantidadeEstoque(e)} defaultValue={quantidadeEstoque} />
                    </View>


                </View>



                <View style={[styles.msgCadastro, styles.inputView]}>
                    <TouchableOpacity style={styles.btn} onPress={handleProduct}>
                        <Text style={styles.tituloBtn}>Editar Produto</Text>

                    </TouchableOpacity>
                </View>

            </View >
        </View>

    );
}


export default ProductEdit;



