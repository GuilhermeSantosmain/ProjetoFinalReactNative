import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthContext } from '../../contexts/auth'
import { Entypo } from '@expo/vector-icons'
import firebase from 'firebase';
import 'firebase/database'
import styles from './styles';


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
        // <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
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

        // </TouchableWithoutFeedback>
    );
}

export default Login;



