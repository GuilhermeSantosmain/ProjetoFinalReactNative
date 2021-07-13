import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductsCard from '../../components/Products';
import { AuthContext } from '../../contexts/auth';


function Products() {
    const { produtos } = useContext(AuthContext)

    return (
        <View>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <ProductsCard item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Products;