import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { windowWidth } from '../../helpers/dimensions';
import Carousel from 'react-native-snap-carousel';


const images = [
    { img: 'https://i.pinimg.com/originals/65/58/2b/65582b768473cefd516a9542349bc084.png' },
    { img: 'https://www.playmakerbrasil.com.br/sites/default/files/wp-content/uploads/2019/08/Nike-Air-Jordan-1-OG-Ad.jpeg' },
    { img: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-97-edicao-especial-masculino-DC3986-100-1.jpg' },
    { img: 'https://s3.amazonaws.com/nikeinc/assets/50814/15-600_Nike_Kyrie_2_Hero-01_native_1600.jpg?1449529832' },
]

const RenderItem = (props) => {
    return (
        <View>
            <Image style={{ height: '100%' }} source={{ uri: props.item.img }} />
        </View>
    )
}

export default class Carrousel extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <Carousel
                    data={images}
                    autoplay={true}
                    loop={true}
                    renderItem={({ item }) => {
                        return <RenderItem item={item} />
                    }}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 350
    },
})