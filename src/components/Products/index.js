import React from 'react';
import { View, Text } from 'react-native'

const Products = (props) => {
    return (
        <View>
            <Text>
                {props.item.name}
            </Text>
        </View>
    )
}

export default Products