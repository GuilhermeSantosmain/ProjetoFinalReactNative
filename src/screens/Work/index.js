import React from 'react';
import { View, Image } from 'react-native';

const Work = () => {
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 350, height: 300 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkOXi1MDru3vU6i6GenkpTmlB-YNNIbHuuKCcygbyrKCxfpSsETPCj1M_j0QUSBzjb6Q&usqp=CAU' }} />
        </View>
    )
}

export default Work