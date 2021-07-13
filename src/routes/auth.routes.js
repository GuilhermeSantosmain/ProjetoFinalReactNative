import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Signin from '../screens/Signin'
import Products from '../screens/Products'
import Login from '../screens/Login'
import Icon from '@expo/vector-icons/AntDesign';

const AuthStack = createStackNavigator()
const AuthBottom = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home'
    },
    Signin: {
        name: 'adduser'
    },
    Login: {
        name: 'login'
    },
    Products: {
        name: 'tags'
    },
    Cart: {
        name: 'shoppingcart'
    },
}

function AuthRoutes() {
    return (
        <AuthBottom.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#121212'
                },
                activeTintColor: '#FFF',
            }}
        >
            <AuthBottom.Screen name="Home" component={Home} />
            <AuthBottom.Screen name="Signin" component={Signin} />
            <AuthBottom.Screen name="Login" component={Login} />
            <AuthBottom.Screen name="Products" component={Products} />
        </AuthBottom.Navigator>
    );
}

export default AuthRoutes;