import React, { createContext, useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])
    const commerce = new Commerce('pk_test_30296ddbc61cf7d7e9a9dd232f0aecf76a93431af069a');
    useEffect(() => {
        commerce.products.list().then((product) => setProdutos(product.data))
    }, [])

    return (
        <AuthContext.Provider value={{ produtos }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;