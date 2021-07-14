import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body:{
    marginTop:180
  },
    title: {
      fontSize: 22,
      fontWeight:"bold", 
      textAlign: "center"
    },
    description:{
      fontSize: 14,
      marginBottom: 30, 
      textAlign: "center"
    },
    bnt:{
      width: 250,
      height: 50,
      backgroundColor: "#000",
      borderRadius: 5,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    bntText: {
      color: "#fff",
    }
  });

  export default styles;