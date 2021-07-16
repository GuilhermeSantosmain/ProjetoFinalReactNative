import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput
} from "react-native";
import { AuthContext } from "../../../contexts/auth";
import ProductCard from '../Card/index';
import { useNavigation } from "@react-navigation/native";






const Products = () => {


  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const { http } = useContext(AuthContext)
  const navigation = useNavigation()

  function onChangeSearch(query) {
    setBusca(query)
    if (busca.length >= 2) {
      setProdutosFiltrados(
        produtos.filter(p => {
          let n = p.nome.toLocaleLowerCase()
          return n.includes(busca.toLocaleLowerCase())
        }),
      );
    } else {
      setProdutosFiltrados(produtos);
    }
  };


  useEffect(() => {
    http.get('produto/todos').then((response) => setProdutos(response.data)).catch(error => console.warn(error))
    http.get('produto/todos').then((response) => setProdutosFiltrados(response.data)).catch(error => console.warn(error))

  }, [])
  return (
    <View style={styles.produtcs}>
      <TextInput
        placeholder="Search"
        onChangeText={(query) => onChangeSearch(query)}
        value={busca}
        style={styles.pesquisa}
      />

      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatList}
        data={produtosFiltrados}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        pagingEnabled
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  produtcs: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pesquisa: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: '80%',
    borderRadius: 10,
    height: 30,

  },
});
