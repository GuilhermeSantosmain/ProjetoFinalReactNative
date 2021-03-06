import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
        http.put(`produto/${selectedValue.id}`, produto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
        navigation.goBack()
    }

    function handleProductEdit(produtoEdit) {
        console.log("foi");
        setSelectedValue(produtoEdit)
        setSelectedValueCategoria(produtoEdit.categoria)
        setQuantidadeEstoque((produtoEdit.quantidadeEstoque).toString())
        setCategoria(produtoEdit.categoria)
        setCodigo(produtoEdit.codigo)
        setDescricaoProduto(produtoEdit.descricao)
        setNomeProduto(produtoEdit.nome)
        setPreco((produtoEdit.preco).toString())
        
    }
    function handleProductDelete(produtoDelete) {
        http.delete(`produto/${produtoDelete.id}`).then(console.log(`o produto ${produtoDelete.nome} foi deletado com sucesso`)).catch(erro => console.log(erro))
        navigation.goBack()

    }
    useEffect(() => {
        http.get('produto/todos').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))
        http.get('categoria/todas').then((response) => { setCategorias(response.data) }).catch(erro => console.log(erro))

    }, [])


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                                <Picker.Item label="Escolha um produto" value="0" />
                                {produtos.map((item) => {

                                    return <Picker.Item key={item.id} label={item.nome} value={item} />
                                })}

                            </Picker>
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Codigo do Produto</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setCodigo({nome: e})} defaultValue={codigo} />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Nome</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setNomeProduto(e)} defaultValue={nomeProduto} />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Descri????o</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setDescricaoProduto(e)} defaultValue={descricaoProduto} />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Pre??o</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setPreco(e)} defaultValue={preco} />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Quantidade de estoque</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setQuantidadeEstoque(e)} defaultValue={quantidadeEstoque} />
                        </View>

                        <View style={[styles.inputView, { marginBottom: 15 }]}>
                            <Text style={styles.inputText}>Categoria</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={selectedValueCategoria}
                                onValueChange={(itemValue) => {
                                    setSelectedValueCategoria(itemValue)
                                }}>
                                <Picker.Item label="Escolha uma categoria" value="0" />
                                {categorias.map((item) => {

                                    return <Picker.Item key={item.id} label={item.nome} value={item} />
                                })}

                            </Picker>
                        </View>

                    </View>



                    <View style={[styles.msgCadastro, styles.inputView]}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleProduct()}>
                            <Text style={styles.tituloBtn}>Editar Produto</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={[styles.msgCadastro, styles.inputView, styles.btnDelete]}>
                        <TouchableOpacity onPress={() => handleProductDelete(selectedValue)}>
                            <Text style={styles.tituloBtn}>Deletar Produto</Text>

                        </TouchableOpacity>
                    </View>

                </View >
            </View>

        </TouchableWithoutFeedback>

    );
}


export default ProductEdit;



