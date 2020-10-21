import React from 'react'
import {View, Text} from 'react-native'
import styles from './estilo'



export default function App(){
  return(
    <View style = {styles.container}>
       <View style={styles.containerTitulo}>
          <Text style = {styles.titulo}>Sobre</Text>
        </View>
      <View style = {styles.box}>
          <Text style = {styles.text}>Planetário desenvolvido com o intuito de apresentar as principais caracteristicas dos planetas do sistema solar
          </Text>
      </View>
    </View>
  )
}