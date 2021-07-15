import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { AuthContext } from "../../contexts/auth";

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const renderItem = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.card}>
      <Image source={{ uri: item.url }} style={styles.img} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.title}>{item.preco}</Text>
    </View>
  </TouchableOpacity>
);

const Products = () => {
  const { produtos } = useContext(AuthContext);

  return (
    <View style={styles.produtcs}>

      <FlatList
        contentContainerStyle={styles.flatList}
        data={itens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 130,
  },

  card: {
    height: windowHeight / 3.5,
    width: windowWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  title: {
    textAlign: 'center'
  },
  flatList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  produtcs: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
