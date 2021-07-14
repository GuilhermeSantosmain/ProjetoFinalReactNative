import React  from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native'
 
const {width} = Dimensions.get("window");
const height = width * 100 / 0.6; 


export default class Slider extends React.Component{

    state= {
        active: 0
    }

    change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active){
            this.setState({active:slide});
        }
    }

    render(){
       return (
           <View style={style.container}>
               <ScrollView
                 showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={this.change}
                style={style.container} 
                >
                {
                    this.props.images.map((image, index) => (
                        <Image 
                        key={index}
                        source={{uri: image}}
                        style={style.image}/>
                        ))
                }
               </ScrollView> 

               <View style={style.pagination}>
                   {
                       this.props.images.map((i,k) => (
                        <Text key={k} style={k==this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
                       ))
                   }
            
               </View>
           </View>
       ) 
    }
}

const style= StyleSheet.create({
    container:{
        width: '100%',
        height: 300
    },

    image:{
        width,
        height, 
        resizeMode: 'cover'
    },
    pagination:{
        flexDirection:'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },

    pagingText:{ 
        fontSize: 22 ,
        color: '#000',
         
    },
        pagingActiveText:{
            color: '#fff', 
           
    },
})


