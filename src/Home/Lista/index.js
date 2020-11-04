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
                <Text style = {styles.titlePlanet}>Mercúrio</Text>

                <Text style = {styles.info}>Vel. Orbital: 48.92 km/s</Text>
                <Text style = {styles.info}>Massa: 5 427 kg/m3</Text>
                
                <Image onTouchEnd={() => {navigation.navigate("Mercurio")}} source={require('../../assets/planet_mercury.png')} style={{
                  width: 170, height: 170, marginLeft: -65, top: -127
                }}/>
                
              </View>

              <View style = {styles.box1}>
                <Text style = {styles.titlePlanet}>Vênus</Text>

                <Text style = {styles.info}>Vel. Orbital: 35.02 km/s</Text>
                <Text style = {styles.info}>Massa: 5 204 kg/m3</Text>

                <Image onTouchEnd={()=>{navigation.navigate("Venus")}} source={require('../../assets/planet_venus.png')} style={{width: 115, height: 115, left: -33,top:  -100}}/>    
              </View>

              <View style = {styles.box1}>
                <Text style = {styles.titlePlanet}>Terra</Text>

                <Text style = {styles.info}>Vel. Orbital: 29.78 km/s</Text>
                <Text style = {styles.info}>Massa: 5 515 kg/m3</Text>

                 <Image onTouchEnd={()=>{navigation.navigate("Terra")}} source={require('../../assets/planet_terra.png')} style={{width: 115, height: 136, left:-35, top: -110}}/>
              </View>

              <View style = {styles.box1}>
                  <Text style = {styles.titlePlanet}>Marte</Text>

                  <Text style = {styles.info}>Vel. Orbital: 24.07 km/s</Text>
                  <Text style = {styles.info}>Massa: 3 933 kg/m3</Text>

                  <Image onTouchEnd={()=>{navigation.navigate("Marte")}} source={require('../../assets/planet_marte.png')} style={{width: 118, height: 114, left: -33, top: -103}}/>  
              </View>

              <View style = {styles.box1}>
                <Text style = {styles.titlePlanet}>Jupiter</Text>

                <Text style = {styles.info}>Vel. Orbital: 13.05 km/s</Text>
                <Text style = {styles.info}>Massa: 1 326 kg/m3</Text>

                <Image onTouchEnd={()=>{navigation.navigate("Jupiter")}} source={require('../../assets/planet_jupiter.png')} style={{width: 125, height: 120, left: -40, top: -103}}/>
              </View>
              <View style = {styles.box1}>
                <Text style = {styles.titlePlanet}>Saturno</Text>

                <Text style = {styles.info}>Vel. Orbital: 9.64 km/s</Text>
                <Text style = {styles.info}>Massa: 687 kg/m3</Text>

                <Image onTouchEnd={()=>{navigation.navigate("Saturno")}} source={require('../../assets/planet_saturno.png')} style={styles.img}/>
              </View>
            <View style = {styles.box1}>
              <Text style = {styles.titlePlanet}>Urano</Text>

              <Text style = {styles.info}>Vel. Orbital: 6.81 km/s</Text>
                <Text style = {styles.info}>Massa: 1 270 kg/m3</Text>

              <Image onTouchEnd={()=>{navigation.navigate("Urano")}} source={require('../../assets/planet_urano.png')} style={{width: 120, height: 110, left: -40, top:-101}}/>
            </View>
            <View style = {styles.box1}>
              <Text style = {styles.titlePlanet}>Netuno</Text>

              <Text style = {styles.info}>Vel. Orbital: 1 638 kg/m3</Text>
                <Text style = {styles.info}>Massa: 5.43 km/s</Text>

              <Image onTouchEnd={()=>{navigation.navigate("Netuno")}} source={require('../../assets/planet_netuno.png')} style={{width: 120, height: 110, left: -40, top: -101, marginBottom: 150}}/>
            </View>
            
            <View style={{marginVertical: 10, height: 100}}></View>
  
          </ScrollView>
  
            
          </ImageBackground>
          
        </View>
      )
}

export default App;