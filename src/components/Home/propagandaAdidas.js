import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';
import { windowWidth, windowHeight } from '../../helpers/dimensions'


const ImagemHome2 = () => {

    const navigation = useNavigation();
  

    return (
        <View style={styles.container}>
      
            <View style={styles.enunciadoGeral}>
                <View style={styles.tituloLinha}>
                    <Text style={styles.tituloNovidade}>Adidas Superstar 50th anniversary</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                        <View style={styles.img}>
                            <Image style={styles.imageHome} source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b98bb6110835375.5ff64c45a5e23.jpg'}} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>    

        </View>
    )
}

export default ImagemHome2;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: windowHeight / 45,
        padding: 10
    },

    img:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageHome:{
        width: windowWidth / 1,
        height: windowHeight / 1.3,
        borderRadius: 5,
    },

    tituloNovidade:{
        fontSize: 22,
        fontWeight: '800'
    },



    
})