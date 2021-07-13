import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Commerce from '@chec/commerce.js';
import Products from './src/components/Products';



export default function App() {

  const [produtos, setProdutos] = useState([])
  const commerce = new Commerce('pk_test_3028616cd3d7d2a8e35e445ef2f3d985c3a267fc23f94');


  useEffect(() => {
    commerce.products.list().then((product) => setProdutos(product.data))
  })


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({ item }) => <Products item={item} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
