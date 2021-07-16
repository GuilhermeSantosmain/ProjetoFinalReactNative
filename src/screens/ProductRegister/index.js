import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react/cjs/react.development';
import styles from './styles'


function ProductRegister() {
    const navigation = useNavigation();
    const { http } = useContext(AuthContext)

    const [codigo, setCodigo] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState({})
    const [categorias, setCategorias] = useState([])
    const [url, setUrl] = useState([])


    async function handleNewProduct() {
        let produto = {
            codigo: codigo,
            nome: nomeProduto,
            descricao: descricaoProduto,
            preco: preco,
            url: url,
            quantidadeEstoque: Number.parseInt(quantidadeEstoque, 10),
            categoria: { id: Number.parseInt(categoria, 10) }

        }
        console.log(url)
        http.post('produto', produto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
    }

    useEffect(() => {
        http.get('categoria/todas').then((response) => { setCategorias(response.data) })
    }, [])


    return (
<ScrollView>
            <View style={styles.body}>
                <View style={styles.form}>


                    <View style={styles.inputs}>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Codigo do Produto</Text>

                            <TextInput placeholder='Ex.: B32A43' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setCodigo(e)} value={codigo} />

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Nome</Text>

                            <TextInput placeholder='Ex.: Jordan One Take II' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setNomeProduto(e)} value={nomeProduto} />

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Descrição</Text>

                            <TextInput placeholder='Ex.: Masculino, Rosa etc' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setDescricaoProduto(e)} value={descricaoProduto} />

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Preço</Text>

                            <TextInput placeholder='Ex.: 699.90' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setPreco(e)} value={preco} />

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Quantidade de estoque</Text>

                            <TextInput placeholder='Ex.: 50' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setQuantidadeEstoque(e)} value={quantidadeEstoque} />

                        </View>

                        
                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Url</Text>

                            <TextInput placeholder='URL de imagem' style={styles.input} blurOnSubmit onBlur={Keyboard.dismiss} onChangeText={(e) => setUrl(e)} value={url} />

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Categoria</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={categoria}
                                onValueChange={(itemValue) =>
                                    setCategoria(itemValue)
                                }>
                                {categorias.map((item) => {

                                    return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                                })}


                            </Picker>
                        </View>
                    </View>



                    <View style={[styles.msgCadastro, styles.inputView]}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleNewProduct()}>
                            <Text style={styles.tituloBtn}>Cadastrar Produto</Text>

                        </TouchableOpacity>
                    </View>

                </View >
            </View>


            </ScrollView>
    );
}


export default ProductRegister;



