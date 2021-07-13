import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Signin from '../screens/Signin'
import Products from '../screens/Products'
import Login from '../screens/Login'

const AuthStack = createBottomTabNavigator()

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Home} />
            <AuthStack.Screen name="Signin" component={Signin} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Products" component={Products} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;