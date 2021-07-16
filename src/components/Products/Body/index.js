import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";
import { AuthContext } from "../../../contexts/auth";
import ProductCard from '../Card/index';
import { useNavigation } from "@react-navigation/native";

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
