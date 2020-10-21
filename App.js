import React from 'react'
import {View, Text} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

import Home from './src/Home/index.js'
import TelaSobre from './src/Sobre/index.js'


function InicialHome({navigation}){
  return(
      <Home/>
  )
  
}
function Sobre({navigation}){
  return(
    <TelaSobre/>
  )
}

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home'
        drawerStyle={{
          backgroundColor: '#4B006E'
        }} drawerContentOptions = {{
          activeTintColor: '#fff'
        }}
      >
        <Drawer.Screen name = 'Home' component = {InicialHome} />
        <Drawer.Screen name = 'Sobre' component = {Sobre}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}