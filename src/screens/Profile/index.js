import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { AuthContext } from '../../contexts/auth';

const Home = () => {
    const { logOut } = useContext(AuthContext)


    return (
        <View>
            <Text>
                Profile
            </Text>
            <TouchableOpacity onPress={() => logOut()}>
                <Text>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;