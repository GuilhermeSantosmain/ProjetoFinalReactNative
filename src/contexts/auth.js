import React, { createContext, useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])
    const commerce = new Commerce('pk_test_3028616cd3d7d2a8e35e445ef2f3d985c3a267fc23f94');
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