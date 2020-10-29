import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, ScrollView, Image, ImageBackground, FlatList, StyleSheet } from 'react-native';

import styles from './estilos'

import AppBar from './Components/AppBar';


function App({navigation}){
    return(
        <View style = {styles.container}>
           
          {/* <View style={styles.containerTitulo}>
          <Text style = {styles.titulo}>Planetário</Text>
          </View> */}

          <AppBar title="Planetário" navigation={navigation} />
          
          <ImageBackground source = {require('../../assets/background_glitter.jpg')} style = {{width: null, height: null}}>
  
  
          <ScrollView showsVerticalScrollIndicator = {false}>
  
              <View style = {styles.box1} onTouchEnd={() => {}} >
                <Image onTouchEnd={() => {navigation.navigate("Mercurio")}} source={require('../../assets/planet_mercury.png')} style={{
                  width: 170, height: 170, marginLeft: -65, top: -12
                }}/>
              </View>
              <View style = {styles.box1}>
                <Image onTouchEnd={()=>{navigation.navigate("Venus")}} source={require('../../assets/planet_venus.png')} style={{width: 115, height: 115, left: -33,top:  15}}/>    
              </View>
              <View style = {styles.box1}>
                 <Image onTouchEnd={()=>{navigation.navigate("Terra")}} source={require('../../assets/planet_terra.png')} style={{width: 115, height: 136, left:-35, top: 8}}/>
              </View>
              <View style = {styles.box1}>
                  <Image onTouchEnd={()=>{navigation.navigate("Marte")}} source={require('../../assets/planet_marte.png')} style={{width: 118, height: 114, left: -33, top: 17}}/>  
              </View>
              <View style = {styles.box1}>
                <Image onTouchEnd={()=>{navigation.navigate("Jupiter")}} source={require('../../assets/planet_jupiter.png')} style={{width: 125, height: 120, left: -40, top: 18}}/>
              </View>
              <View style = {styles.box1}>
                <Image onTouchEnd={()=>{navigation.navigate("Saturno")}} source={require('../../assets/planet_saturno.png')} style={styles.img}/>
              </View>
            <View style = {styles.box1}>
              <Image onTouchEnd={()=>{navigation.navigate("Urano")}} source={require('../../assets/planet_urano.png')} style={{width: 120, height: 110, left: -40, top:19}}/>
            </View>
            <View style = {styles.box1}>
              <Image onTouchEnd={()=>{navigation.navigate("Netuno")}} source={require('../../assets/planet_netuno.png')} style={{width: 120, height: 110, left: -40, top: 19, marginBottom: 150}}/>
            </View>
            
            <View style={{marginVertical: 10, height: 100}}></View>
  
          </ScrollView>
  
            
          </ImageBackground>
          
        </View>
      )
}

export default App;