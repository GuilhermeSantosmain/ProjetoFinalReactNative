import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileIcon: {
       paddingRight:15
    },
    header: {
        borderBottomWidth: 0.5,
        borderColor: "#aaa",
        flexDirection:'row',
        justifyContent: "space-between",
        height: 60,
        alignItems: "center"
        
    },
    title :{        
        fontWeight:"bold",
        paddingLeft: 15
    },
  });

  export default styles;