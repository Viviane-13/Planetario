import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000133"
  },

  box1:{
    backgroundColor: '#E4DFDA',
    height: 150,
    borderRadius: 20,
    margin: 20,
    marginLeft: 50,
    marginBottom: 7,
  },

  titulo:{
    marginTop:30,
    color:'#E4DFDA',
    fontSize:24,
    marginBottom:15
  },

  containerTitulo:{
    backgroundColor:'#000133',
    alignItems:'center'
  },
  img:{
    width: 160,
    height: 170, 
    borderRadius: 50, 
    position:'absolute',
    left: -63,
    top: -12
    }
});

export default styles;