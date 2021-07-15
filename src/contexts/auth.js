import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/database'
import axios from 'axios';

let firebaseConfig = {
    apiKey: "AIzaSyC8mNFs5TrKkJUaINQgD7j52y1JlKAPimk",
    authDomain: "projeto-final-c6319.firebaseapp.com",
    databaseURL: "https://projeto-final-c6319-default-rtdb.firebaseio.com",
    projectId: "projeto-final-c6319",
    storageBucket: "projeto-final-c6319.appspot.com",
    messagingSenderId: "994366137575",
    appId: "1:994366137575:web:6d7a2bfeda8063feeaee42",
    measurementId: "G-J0342R99TS"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [user, setUser] = useState(null)
    const http = axios.create({
        baseURL: 'http://192.168.1.65:8080',
    })

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }
        async function loadDatabase() {
            await http.get('produto/todos').then((response) => setProdutos(response.data)).catch(error => console.warn(error))
            await http.get('categoria/todas').then((response) => { setCategorias(response.data) }).catch(error => console.warn(error))
        }

        loadDatabase()
        loadStorage()
    }, [])

    async function logIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email,
                            auth: false
                        }
                        setUser(data);
                        storageUser(data)
                    })
            })
            .catch((error) => alert(error.code))
    }

    async function signIn(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                        };
                        setUser(data);
                        storageUser(data)
                    })
                    .catch((error) => alert(error.code))
            })
    }

    async function logOut() {
        await firebase.auth().signOut()
        await AsyncStorage.clear().then(() => { setUser(null) })
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ produtos, signed: !!user, user, signIn, logIn, logOut, http, categorias, setCategorias }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;