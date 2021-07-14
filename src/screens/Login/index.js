import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import firebase from 'firebase';
import 'firebase/database'

function Login() {
    const navigation = useNavigation();
    const { logIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        logIn(email, password)
        navigation.navigate('Products')
    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput style={styles.input} onChange={(e) => setEmail(e.target.value)} />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput style={styles.input} onChange={(e) => setPassword(e.target.value)} />
                </View>
                <View style={styles.msgCadastro}>
                    <Text style={styles.msg}>Ainda não tem cadastro? </Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.msgBtn}>Login</Text>

                    </TouchableOpacity>
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

    inputTxt: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        padding: 10,
        marginBottom: 20,

    },

    input: {
        width: '100%',
        height: 35,
        padding: 3,
        textDecorationLine:'none'
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

