import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { AuthContext } from '../../contexts/auth';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Signin() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    function handleSignIn() {
        signIn(email, password, nome)
        navigation.navigate('Products')
    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Digite seu nome" style={styles.input} onChange={(e) => setNome(e.target.value)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Seu E-mail" style={styles.input} onChange={(e) => setEmail(e.target.value)} />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput placeholder="Sua senha" style={styles.input} onChange={(e) => setPassword(e.target.value)} />
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

    input: {
        width: '100%',
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
        fontWeight: 500,
        color: '#fff',
        padding: 10,
    },

    btn:{
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.8,
        backgroundColor: '#000',
    }

});

