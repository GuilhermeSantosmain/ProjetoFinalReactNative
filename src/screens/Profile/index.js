import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable, ImageBackground } from 'react-native';
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
            <ImageBackground source={{ uri: "https://www.napratica.org.br/wp-content/uploads/2018/09/curso-de-administra%C3%A7%C3%A3o.jpg" }} style={styles.container}>
                <View style={styles.userDatail}>
                    <Text style={styles.greetings}>
                        Bem vindo {perfil.nome}
                    </Text>
                    <Text>
                        Tipo de conta: ADM
                    </Text>
                </View>
                <View style={styles.adminArea}>
                    <TouchableOpacity style={styles.btnAdm} onPress={() => navigation.navigate('CategoryRegister')}>
                        <Text>
                            Cadastrar categorias
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdm} onPress={() => navigation.navigate('ProductRegister')}>
                        <Text>
                            Cadastrar produtos
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdm} onPress={() => navigation.navigate('CategoryRegister')}>
                        <Text>
                            Ver todos os pedidos
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdm} onPress={() => navigation.navigate('ProductRegister')}>
                        <Text>
                            Editar produtos
                        </Text>
                    </TouchableOpacity>


                </View>
                <View style={{ padding: 10, margin: 5 }}>
                    <TouchableOpacity style={[styles.btnUser, { backgroundColor: 'red' }]} onPress={() => logOut()}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    } else {
        return (
            <ImageBackground source={{ uri: "https://pbs.twimg.com/media/BtYBWwZIQAAcPuw?format=jpg&name=small" }} style={styles.container}>
                <View style={styles.userDatail}>
                    <Text style={styles.greetings}>
                        Bem vindo {perfil.nome}!
                    </Text>

                </View>
                <View style={styles.userArea}>
                    <TouchableOpacity style={styles.btnUser} onPress={() => navigation.navigate('CategoryRegister')}>
                        <Text>
                            Ver suas compras
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnUser} onPress={() => navigation.navigate('ProductRegister')}>
                        <Text>
                            Carrinho
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnUser} onPress={() => navigation.navigate('CategoryRegister')}>
                        <Text>
                            Editar informacoes
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ padding: 10, margin: 5 }}>
                    <TouchableOpacity style={[styles.btnUser, { backgroundColor: 'red' }]} onPress={() => logOut()}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'space-between'
    },
    greetings: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    userDatail: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        height: 100,
    },
    adminArea: {
        margin: 5,
        padding: 10,

    },
    userArea: {
        margin: 5,
        padding: 10,

    },
    btnAdm: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        borderRadius: 30
    },
    btnUser: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFF',
        borderRadius: 30
    }
})

export default Home;