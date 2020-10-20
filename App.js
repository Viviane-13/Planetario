import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


class App extends Component{
  render(){
    return(
      <View style = {styles.container}>

        <View style={styles.containerTitulo}>
          <Text style = {styles.titulo}>Planetário</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator = {false}>

          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          <View style = {styles.box1}></View>
          
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000133"
  },

  box1:{
    backgroundColor: '#E4DFDA',
    height: 150,
    width: 300,
    borderRadius: 10,
    margin: 13,
    marginLeft: 30,
  },

  titulo:{
    marginTop:30,
    color:'#E4DFDA',
    fontSize:24,
    marginBottom:15
  },

  containerTitulo:{
    backgroundColor:'#4B006E',
    alignItems:"center"
  }
  
});

export default App;