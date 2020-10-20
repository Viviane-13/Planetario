import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
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
        <View>
          <Text>PlANETARIO</Text>
        </View>
       

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
  
});

export default App;
