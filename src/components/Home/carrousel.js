import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { windowWidth } from '../../helpers/dimensions';
import Carousel from 'react-native-snap-carousel';


const images = [
    { img: 'https://cdn.shopify.com/s/files/1/0408/9909/files/Nike_Air_Max_720_-_Metallic_Silver-Black_AO2924-001_-_Feature-LV_-_January_23_2019-11_1024x1024.jpg?v=1548455115'},
    { img: 'https://static.dezeen.com/uploads/2018/08/grit-training-shoes-aarish-netarwala-design_dezeen_2364_col_3-852x858.jpg' },
    { img: 'https://www.playmakerbrasil.com.br/sites/default/files/wp-content/uploads/2019/08/Nike-Air-Jordan-1-OG-Ad.jpeg' },
    { img: 'https://static.dezeen.com/uploads/2018/08/grit-training-shoes-aarish-netarwala-design_dezeen_2364_sq-1.jpg'},
    { img: 'https://i.pinimg.com/originals/78/61/b2/7861b2a8efb04e7a3733182713df1740.png' },
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