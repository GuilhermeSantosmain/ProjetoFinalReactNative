import React from 'react';
import { View, Text } from 'react-native'

const Products = (props) => {
    const [produtos, setProdutos] = useState([])
    /*
    useEffect(() => {

        http.get('produto/todos').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))

    }, [])
if (produtos.lenght === 0){

    return (
        <View>
            <Text>
                {props.item.nome}
            </Text>
        </View>
    )
    }else {

        return (
            <View>
                {produtos}
            </View>
        )
    }
    */
}

export default Products