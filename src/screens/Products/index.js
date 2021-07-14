import React, {useContext} from 'react';
import { View, Text } from 'react-native'
import { AuthContext } from '../../contexts/auth'

const Products = (props) => {
    
    const {produtos} = useContext(AuthContext);
    
if (produtos.lenght === 0){

    return (
        <View>
            <Text>
                Nao ha nada aqui
            </Text>
        </View>
    )
    }else {

        return (
            <View>
                <Text>

                {produtos.map((item) =>
                            {item.nome}
                )}
                </Text>
            </View>
        )
    }
    
}

export default Products