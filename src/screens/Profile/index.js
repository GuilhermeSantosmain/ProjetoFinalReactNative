import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import firebase from 'firebase';
import 'firebase/database'

const Home = () => {
    const navigation = useNavigation()
    const { logOut, user } = useContext(AuthContext)
    const [perfil, setPerfil] = useState(user)
    const [adm, setAdm] = useState(false)

    useEffect(() => {
        async function userType() {
            await firebase.database().ref(`users/${perfil.uid}`).on('value', (snapshot) => {

                snapshot.val().auth ? setAdm(true) : setAdm(adm)
            })
        }
        userType()
    }, [])

    if (adm) {
        return (
            <View>
                <Text>
                    Bem vindo adm {perfil.nome}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryRegister')}>
                    <Text>
                        Cadastrar categorias
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductRegister')}>
                    <Text>
                        Cadastrar produtos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logOut()}>
                    <Text>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View>
                <Text>
                    Bem vindo usuario {perfil.nome}
                </Text>
                <TouchableOpacity onPress={() => logOut()}>
                    <Text>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home;