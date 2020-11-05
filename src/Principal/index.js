
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native'



export default function Inicial({navigation}){
  

  return(
    
  
      <ImageBackground style = {styles.container} source = {require('../assets/background_glitter.jpg')} >
        <Text style = {styles.titulo}>EXPLORAÇÃO ESPACIAL</Text>
        <Text style = {styles.description}>
      O Sistema Solar é um conjunto de corpos celestes que gravitam na órbita de um sol (uma estrela).  formado por oito planetas, satélites naturais, meteoros e cometas que giram em torno do Sol.
        </Text>
      <TouchableOpacity style = {styles.btn} onPress = {() => navigation.navigate('Home')} >
        <Text style={{color: '#fff', fontFamily: 'Aldrich_400Regular', fontSize: 20}}>Explorar</Text>
      </TouchableOpacity>
      <Image source = {require('../assets/glowing.png')} style = {{width: 500, height: 200, paddingHorizontal: 0, resizeMode: 'stretch'} }/>
      </ImageBackground>
  
 
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
   
    width: null,
    height: null,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo:{
    color:'#FFF',
    fontSize: 34,
    marginHorizontal: 15,
    marginTop: 100,
    fontFamily: 'Aldrich_400Regular',
    lineHeight: 50
  },
  description:{
    color: '#fff',
    marginTop: 70,
    paddingHorizontal: 20,
    fontFamily: 'Aldrich_400Regular',
    fontSize: 15,
    lineHeight: 20,
    
  },
  btn:{
    marginTop: 60,
    borderRadius: 30,
    width: 120,
    alignItems: 'center',
    padding: 5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  
})
