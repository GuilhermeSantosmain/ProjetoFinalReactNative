import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react/cjs/react.development';
import styles from './styles';

function CategoryEdit() {
    const navigation = useNavigation();
    const { http } = useContext(AuthContext)

    const [selectedValueCategoria, setSelectedValueCategoria] = useState({});
    
    const [categorias, setCategorias] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState("")
    const [descricaoCategoria, setDescricaoCategoria] = useState("")
    
    function handleCategory() {
        const categoria = {
            descricao: descricaoCategoria,
            nome: nomeCategoria,
        }
        console.log(selectedValueCategoria.id)
        http.put(`categoria/${selectedValueCategoria.id}`, categoria).then(console.log(`Categoria editada:${selectedValueCategoria.nome}`)).catch(erro => console.log(erro))
        navigation.goBack()
    }

    function handleCategoryEdit(categoriaEdit) {
        console.log("foi");
        setSelectedValueCategoria(categoriaEdit)
        setDescricaoCategoria(categoriaEdit.descricao)
        setNomeCategoria(categoriaEdit.nome)
        
        
    }
    function handleCategoryDelete(categoriaDelete) {
        console.log(categoriaDelete.id)
        http.delete(`categoria/${categoriaDelete.id}`).then(console.log(`o categoria ${categoriaDelete.nome} foi deletado com sucesso`)).catch(erro => console.log(erro))
        navigation.goBack()

    }
    useEffect(() => {
        http.get('categoria/todas').then((response) => { setCategorias(response.data) }).catch(erro => console.log(erro))

    }, [])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.body}>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Categoria</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={selectedValueCategoria}
                                onValueChange={(itemValue) => {
                                    handleCategoryEdit(itemValue)
                                }}>
                                <Picker.Item label="Escolha uma categoria" value="0" />
                                {categorias.map((item) => {

                                    return <Picker.Item key={item.id} label={item.nome} value={item} />
                                })}

                            </Picker>
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Nome</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setNomeCategoria(e)} defaultValue={nomeCategoria} />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Descrição</Text>
                            <TextInput style={styles.input} onChangeText={(e) => setDescricaoCategoria(e)} defaultValue={descricaoCategoria} />
                        </View>

                    </View>



                    <View style={[styles.msgCadastro, styles.inputView]}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleCategory()}>
                            <Text style={styles.tituloBtn}>Editar Categoria</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={[styles.msgCadastro, styles.inputView, styles.btnDelete]}>
                        <TouchableOpacity onPress={() => handleCategoryDelete(selectedValueCategoria)}>
                            <Text style={styles.tituloBtn}>Deletar Categoria</Text>

                        </TouchableOpacity>
                    </View>

                </View >
            </View>

        </TouchableWithoutFeedback>

    );
}


export default CategoryEdit;