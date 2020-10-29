import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lista from './Lista/index';
import Mercurio from './Planeta/Mercurio/index';
import Venus from './Planeta/Venus/index';
import Terra from './Planeta/Terra/index';
import Marte from './Planeta/Marte/index';
import Jupiter from './Planeta/Jupiter/index';
import Saturno from './Planeta/Saturno/index';
import Urano from './Planeta/Urano/index';
import Netuno from './Planeta/Netuno/index';


const Stack = createStackNavigator();

export default function PlanetaHome(){
  return(
    <Stack.Navigator headerMode="none" initialRouteName="Lista" >
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Mercurio" component={Mercurio} />
      <Stack.Screen name="Venus" component={Venus} />
      <Stack.Screen name="Terra" component={Terra} />
      <Stack.Screen name="Marte" component={Marte} />
      <Stack.Screen name="Jupiter" component={Jupiter} />
      <Stack.Screen name="Saturno" component={Saturno} />
      <Stack.Screen name="Urano" component={Urano} />
      <Stack.Screen name="Netuno" component={Netuno} />
    </Stack.Navigator>
  );
}