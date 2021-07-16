import React from 'react';
import { StyleSheet } from 'react-native';
import { windowWidth } from '../../../helpers/dimensions';

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
    },

    finalizaBtn:{
      backgroundColor: '#000',
      borderRadius: 10,
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20, 
    },

    finalizaTxt:{
      color: '#fff',
      padding: windowWidth / 45,
      fontSize: 20,

    },

  });

  export default styles;