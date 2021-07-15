import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react/cjs/react.development';
import styles from './styles'


function ProductEdit() {
    const navigation = useNavigation();
    const { http } = useContext(AuthContext)

    const [selectedValue, setSelectedValue] = useState("Selecione um produto");
    const [selectedValueCategoria, setSelectedValueCategoria] = useState("");

    const [codigo, setCodigo] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')

    
    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias] = useState([])


    function handleProduct() {
        const produto = {
            codigo: codigo,
            nome: nomeProduto,
            descricao: descricaoProduto,
            preco: preco,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria
        }
        console.log(selectedValue.id)
        http.put(`produto/${selectedValue.id}` , produto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
    }

     function handleProductEdit(produtoEdit) {
        console.log("foi");
        setSelectedValue(produtoEdit)
            setCategoria(produtoEdit.categoria)
            setCodigo(produtoEdit.codigo)
            setDescricaoProduto(produtoEdit.descricao)
            setQuantidadeEstoque((produtoEdit.quantidadeEstoque).toString())
            setNomeProduto(produtoEdit.nome)
            setPreco((produtoEdit.preco).toString())
        

    }
    useEffect(() => {
        http.get('produto/todos').then((response) => { setProdutos(response.data) })
        http.get('categoria/todas').then((response) => {setCategorias(response.data)})
    },[])


    return (
        <View style={styles.body}>
            <View style={styles.form}>
                <View style={styles.inputs}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Produto</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => {                             
                            handleProductEdit(itemValue)
                            }}>
                            {produtos.map((item) => {
                               
                                return <Picker.Item key={item.id} label={item.nome} value={item} />
                            })}

                        </Picker>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Codigo do Produto</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setCodigo(e)} defaultValue={codigo} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setNomeProduto(e)} defaultValue={nomeProduto} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Descrição</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setDescricaoProduto(e)} defaultValue={descricaoProduto} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Preço</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setPreco(e)} defaultValue={preco} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Quantidade de estoque</Text>
                        <TextInput style={styles.input} onChangeText={(e) => setQuantidadeEstoque(e)} defaultValue={quantidadeEstoque} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Categoria</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedValueCategoria}
                            onValueChange={(itemValue) => {
                            setSelectedValueCategoria(itemValue) 
                            }}>
                            {categorias.map((item) => {
                               
                                return <Picker.Item key={item.id} label={item.nome} value={item} />
                            })}

                        </Picker>
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



