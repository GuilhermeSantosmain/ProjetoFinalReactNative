import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView

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

    <View style={styles.container}>

          <View style={styles.enunciadoGeral}>
            <View style={styles.tituloLinha}>
              <Text style={styles.tituloNovidade}>NOVIDADES</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Text style={styles.tituloTudo}>Ver tudo</Text>
              </TouchableOpacity>
           </View>
         </View>

      <SafeAreaView style={styles.linhaIcons}>
        <FlatList
          horizontal={true}
          data={produtos}
          renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
    

  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20
},

linhaIcons: {
    marginLeft: 15,
},

tituloLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
},

tituloNovidade: {
    fontSize: 22,
    fontWeight: '700',
},

tituloTudo: {
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: '700',
},

enunciadoGeral: {
    alignItems: 'center',
}
});
