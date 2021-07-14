import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';



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
                    <TextInput style={styles.input} onChange={(e) => setNome(e.target.value)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput style={styles.input} onChange={(e) => setEmail(e.target.value)} />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput style={styles.input} onChange={(e) => setPassword(e.target.value)} />
                </View>
                <View style={styles.msgCadastro}>


                    <TouchableOpacity onPress={handleSignIn}>
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

