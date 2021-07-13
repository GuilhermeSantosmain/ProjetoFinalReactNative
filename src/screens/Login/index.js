import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt}>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text>Cadastro</Text>

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

});

