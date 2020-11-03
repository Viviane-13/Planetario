import React from 'react'
import {StyleSheet} from 'react-native'

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:  '#000133',

  },
  box:{
    width: 300,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    //backgroundColor: '#E4DFDA',
    marginHorizontal: 55,
    marginVertical: 90,
    borderRadius: 30,
    padding:10,
    
  },
  text:{
    margin: 10,
    color: '#E4DFDA',
    fontSize: 24
  },
  containerTitulo:{
    backgroundColor:'#000133',
    alignItems:'center'
  },
  titulo:{
    marginTop:30,
    color:'#E4DFDA',
    fontSize:24,
    marginBottom:15
  },
})

export default styles;