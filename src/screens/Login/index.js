import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Entypo } from '@expo/vector-icons'
import firebase from 'firebase';
import 'firebase/database'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login() {
    const navigation = useNavigation();
    const { logIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
  

    function handleLogin() {
        logIn(email, password)
        navigation.navigate('Products')
    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.cxtTxt}>
                    <View style={styles.inputTxt} >
                        <TextInput value={email} placeholder="E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} />
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
                </View>

                <View style={styles.btnLogin}>
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={styles.txt}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.msgCadastro}>
                    <Text style={styles.msg}>Ainda não tem cadastro? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.msgBtn}>Cadastre-se</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cxtTxt: {
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
        width: '80%',
        height: windowHeight / 15,
        padding: 3,
        textDecorationLine: 'none'
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
    },

    btn: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.8,
        backgroundColor: '#000',
    },

    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    btnLogin: {
        marginTop: windowHeight / 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

