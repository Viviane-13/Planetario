import React from 'react'
import {View, Text, ImageBackground, ScrollView} from 'react-native'
import styles from './estilo'



export default function App(){
  return(
    <View style = {styles.container}>
        <ImageBackground source = {require('../assets/background_glitter.jpg')} style = {{width: null, height: null, flex: 1}}>
      <View style = {styles.box}>
          <Text style = {styles.description}>Planetário desenvolvido com o intuito de apresentar as principais caracteristicas dos planetas do sistema solar. Todos os cards foram pensados e desenvolvidos para atenter a todas os tipos de público. Seu Layout simples e intuitivo permite que os usuários acessem todas as informações contidas nos cards e demais formas de navegação.
          </Text>
          <Text style = {{fontWeight: 'bold', color: '#E4DFDA', fontSize:20, marginTop: 25, textAlign: 'center', marginBottom: 15}}>
            Desenvolvedores
          </Text >
          <View style = {{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Text style = {styles.dev}>Daiane Matos</Text>
          <Text style = {styles.dev}>Fábio Andrade</Text>
          <Text style = {styles.dev}>Viviane Oliveira</Text>
          </View>
          
      </View>
      </ImageBackground>
    </View>
  )
}