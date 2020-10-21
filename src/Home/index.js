import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import styles from './estilo'

class App extends Component{
  render(){
    return(
      <View style = {styles.container}>

        <View style={styles.containerTitulo}>
          <Text style = {styles.titulo}>Planetário</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator = {false}>

          <View style = {styles.box1}>
            <Image source={require('../assets/planet_mercury.png')} style={styles.img}/>
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_venus.png')} style={{width: 115, height: 115, left: -33,top:  15}}/>    
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_terra.png')} style={{width: 115, height: 136, left:-35, top: 8}}/>
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_marte.png')} style={{width: 118, height: 114, left: -33, top: 17}}/>  
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_jupiter.png')} style={{width: 125, height: 120, left: -40, top: 18}}/>
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_saturno.png')} style={styles.img}/>
          </View>
          <View style = {styles.box1}>
            <Image source={require('../assets/planet_urano.png')} style={{width: 120, height: 110, left: -40, top:19}}/>
          </View>
          <View style = {styles.box1}>
           <Image source={require('../assets/planet_netuno.png')} style={{width: 120, height: 110, left: -40, top: 19}}/>
          </View>
          
        </ScrollView>
        
      </View>
    )
  }
}



export default App;