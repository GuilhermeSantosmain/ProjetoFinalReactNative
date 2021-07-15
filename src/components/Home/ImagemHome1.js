import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';
import { windowWidth, windowHeight } from '../../helpers/dimensions'


const ImagemHome1 = () => {

    const navigation = useNavigation();
  

    return (
        <View style={styles.container}>
      
            <View style={styles.enunciadoGeral}>
                <View style={styles.tituloLinha}>
                    <Text style={styles.tituloNovidade}>NOVA LINHA:</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                        <View style={styles.img}>
                            <Image style={styles.imageHome} source={{uri:'https://i.pinimg.com/originals/42/b9/a4/42b9a4536c2ec604c0136df4180f7de2.jpg'}} />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.subTitulo}>CRIADO PARA VELOCIDADE NO DIA DA CORRIDA</Text>

                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Products')}>
                        <View style={styles.btn}>
                            <Text style={styles.btnTxt}>Ver tênis</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>    

        </View>
    )
}

export default ImagemHome1;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: windowHeight / 45,
        padding: 20
    },

    img:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageHome:{
        width: windowWidth / 1,
        height: windowHeight / 1.2,
        borderRadius: 5,
    },

    tituloNovidade:{
        fontSize: 22,
        fontWeight: '800'
    },

    subTitulo:{
        marginTop: windowHeight / 50,
        marginLeft: windowHeight / 35,
        fontSize: 16,
        fontWeight: '700',
    },

    botao:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    btn:{
        backgroundColor: '#000',
        height: 35,
        borderRadius: 5,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    btnTxt:{
        fontSize: 18,
        fontWeight:"600",
        color: '#fff',
    },
    
})