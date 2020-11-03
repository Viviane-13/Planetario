
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native'


export default function Inicial({navigation}){
  return(

    <View style = {styles.container}>
      <ImageBackground source = {require('../assets/background_glitter.jpg')} style = {styles.ImgBg}>
        <Text style = {styles.titulo}>EXPLORAÇÃO ESPACIAL</Text>
        <Text style = {styles.description}>
      O Sistema Solar é um conjunto de corpos celestes que gravitam na órbita de um sol (uma estrela).  formado por oito planetas, satélites naturais, meteoros e cometas que giram em torno do Sol.
        </Text>
      <TouchableOpacity style = {styles.btn} onPress = {() => navigation.navigate('Home')} >
        <Text style={{color: '#fff'}}>Explorar</Text>
      </TouchableOpacity>
      <Image source = {require('../assets/glowing.png')} style = {{width: 400, height: 220} }/>
      </ImageBackground>
    </View>
 
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  ImgBg:{
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
    
  },
  titulo:{
    color:'#FFF',
    fontSize: 34,
    marginHorizontal: 15,
    marginTop: 40,
    
  },
  description:{
    color: '#fff',
    marginTop: 70
  },
  btn:{
    marginTop: 40,
    borderRadius: 30,
    width: 80,
    alignItems: 'center',
    padding: 5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  
})
