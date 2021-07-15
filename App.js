import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/Signin';
import ProductRegister from './src/screens/ProductRegister';
import CategoryRegister from './src/screens/CategoryRegister';
import ProductEdit from './src/screens/ProductEdit';

// console.disableYellowBox = true;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Routes} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Signin} />
          <Stack.Screen name="ProductRegister" component={ProductRegister} />
          <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
          <Stack.Screen name="ProductEdit" component={ProductEdit} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
