import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Entypo } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Signin() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    const navigation = useNavigation();

    function handleSignIn() {
        signIn(email, password, nome)
        navigation.navigate('Products')
    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Digite seu nome" style={styles.input} onChangeText={(e) => setNome(e)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Seu E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} />
                </View>

                <View style={styles.inputSenha}>
                    <TextInput secureTextEntry={hidePass} value={password} placeholder="Senha" style={styles.input} onChangeText={(e) => setPassword(e)} />
                    <TouchableOpacity style={styles.iconSenha} onPress={ () => setHidePass(!hidePass)}>
                        { hidePass ?
                        <Entypo name="eye" color="#000" size={25} /> 
                        :
                        <Entypo name="eye-with-line" color="#000" size={25} /> 
                        }
                    </TouchableOpacity>
                </View>



                <View style={styles.msgCadastro}>


                    <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
                        <Text style={styles.msgBtn}>Cadastre-se</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Signin;

const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputTxt: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: windowWidth / 1.5,
        padding: 5,
        marginBottom: windowHeight / 30,
    },

    inputSenha:{

        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: windowWidth / 1.5,
        padding: 5,
        marginBottom: windowHeight / 30,
        flexDirection: 'row'
    },

    iconSenha:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },

    input: {
        width: '90%',
        height: windowHeight / 15,
        padding: 10
    },

    msgCadastro: {
        marginTop: windowHeight / 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    msg: {
        fontSize: 16
    },

    msgBtn: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    btn: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.8,
        backgroundColor: '#000',
    }

});

