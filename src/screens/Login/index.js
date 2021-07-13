import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Login() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
                <Text>
                    Cadastro
                </Text>
            </TouchableOpacity>
        </View >
    );
}

export default Login;