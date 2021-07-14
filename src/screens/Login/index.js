import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View  style={styles.inputTxt}>
                    <TextInput placeholder="E-mail"  style={styles.input} />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput placeholder="Senha" textDecorationLine='none' style={styles.input} />
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

    msgCadastro:{
        marginTop: 20,
        flexDirection: 'row',
    },

    msg:{
        fontSize: 16
    },

    msgBtn:{
        fontSize: 16,
        color: '#29d97b' 
    }

});

