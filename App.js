import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'



import Home from './src/Home/index.js'
import Sobre from './src/Sobre/index.js'
import Quiz from './src/Quiz/index.js'
import TelaAcerto from './src/Quiz/TelaAcerto/index.js'
import TelaErro from './src/Quiz/TelaErro/index.js'
import AcertoFinal from './src/Quiz/AcertoFinal/index.js'
import Principal from './src/Principal/index.js'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App(){
  return(

    <NavigationContainer >
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Principal" component = { Principal } />
        <Stack.Screen name="Home" component = { DrawerHome } />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

  function DrawerHome() {
    return(

      <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#000133',
      }} drawerContentOptions = {{
        inactiveTintColor:'#8AB8FE',
        activeTintColor: '#fff'
      }}>

        <Drawer.Screen name = 'Home' component = {Home} />
        <Drawer.Screen name = 'Sobre' component = {Sobre}/>
        <Drawer.Screen name = 'Quiz' component = {StackQuiz}/>
        
      </Drawer.Navigator>
    );
  }

  function StackQuiz() {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="TelaAcerto" component={TelaAcerto} />
        <Stack.Screen name="TelaErro" component={TelaErro} />
        <Stack.Screen name="AcertoFinal" component={AcertoFinal}/>
      </Stack.Navigator>
    );
  }

}