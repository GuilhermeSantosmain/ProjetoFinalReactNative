import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { AuthContext } from "../../../contexts/auth";
import ProductCard from '../Card/index';
import { useNavigation } from "@react-navigation/native";
import { windowWidth, windowHeight } from "../../../helpers/dimensions";
import { FontAwesome } from '@expo/vector-icons'

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
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          onChangeText={(query) => onChangeSearch(query)}
          value={busca}
          style={styles.pesquisa}
        />
        <TouchableOpacity style={styles.iconPesquisa}>
          <FontAwesome name='search' size={18} />
        </TouchableOpacity>
      </View>

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

  search:{
    borderColor: 'black',
    borderWidth: 0.5,
    width: windowWidth / 1.5,
    borderRadius: 10,
    height: windowWidth / 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  pesquisa: {
    fontSize: 16,
    marginLeft: windowWidth / 30,
    width: '80%',
  },

  iconPesquisa:{
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
