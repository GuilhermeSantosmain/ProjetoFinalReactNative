import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";
import { AuthContext } from "../../contexts/auth";
import ProductCard from '../../components/Products/index';
import { useNavigation } from "@react-navigation/native";

const itens = [
  {
    id: "ABC",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-sb-nyjah-free-2-unissex-BV2078-103-1.jpg",
    nome: "Tênis Nike SB Nyjah Free 2 Unissex",
    preco: "R$ 699,99",
  },
  {
    id: "ABCD",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-97-masculino-DB4611-002-1.jpg",
    nome: "Tênis Nike Air Max 97 Masculino",
    preco: "R$ 519,99",
  },
  {
    id: "ABCDE",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-zoom-gt-cut-unissex-CZ0175-101-1.jpg",
    nome: "Tênis Nike Air Zoom G.T. Cut Unissex",
    preco: "R$ 1.099,99",
  },
  {
    id: "ABCDEF",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-kyrie-7-seasonal-CZ0141-100-1.jpg",
    nome: "Tênis Nike Kyrie 7 Masculino",
    preco: "R$ 749,99",
  },
  {
    id: "ABCDEFG",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-zm950-masculino-CJ6700-001-1.jpg",
    nome: "Tênis Nike Air Max ZM950 Masculino",
    preco: "R$ 619,99 ",
  },
  {
    id: "ABCDEFGH",
    url: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-zm950-masculino-CJ6700-001-1.jpg",
    nome: "Tênis Nike Air Max ZM950 Masculino",
    preco: "R$ 619,99 ",
  },
];

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const { http } = useContext(AuthContext)
  const navigation = useNavigation()
  useEffect(() => {
    http.get('produto/todos').then((response) => setProdutos(response.data)).catch(error => console.warn(error))

  }, [])
  return (
    <View style={styles.produtcs}>

      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatList}
        data={produtos}
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
  }
});
