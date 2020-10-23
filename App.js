import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Principal from './src/Principal'
import Home from './src/Home'
import TelaSobre from './src/Sobre'

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
      
      <Drawer.Navigator initialRouteName = 'Principal'
        drawerStyle={{
          backgroundColor: '#000133'
        }} drawerContentOptions = {{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff'
        }}
      >
        <Drawer.Screen name = 'Home' component = {InicialHome} />
        <Drawer.Screen name = 'Sobre' component = {Sobre}/>
        <Drawer.Screen name = 'Principal' component = {Principal}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

