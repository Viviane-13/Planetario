import React from 'react'
import {View, Text, ImageBackground, ScrollView} from 'react-native'
import styles from './estilo'



export default function App(){
  return(
    <View style = {styles.container}>
        <ImageBackground source = {require('../assets/background_glitter.jpg')} style = {{width: null, height: null, flex: 1}}>
      <View style = {styles.box}>
          <Text style = {styles.text}>Planetário desenvolvido com o intuito de apresentar as principais caracteristicas dos planetas do sistema solar
          </Text>
      </View>
      </ImageBackground>
    </View>
  )
}