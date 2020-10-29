import React from 'react';
import {View,Text, Image, TouchableOpacity} from'react-native';
import estilo from './estilo';
import trofeu from '../../assets/trofeu.png';
import { useLinkProps } from '@react-navigation/native';

export default function AcertoFinal(props){

    const voltarHome=()=>{
        props.navigation.navigate('Home');
    }

    return(

        <View style={estilo.container}>

            <View style={estilo.card}>

                <View>
                    <Text style={estilo.texto}> Pontuação Final: 1 </Text>
                </View>

                <Image source={trofeu} style={estilo.img}/>

                <TouchableOpacity style={estilo.botao}
                onPress={voltarHome}>

                    <Text style={estilo.textoBotao}>Continuar aprendendo</Text>
                </TouchableOpacity>

                
            </View>
        </View>

    )
}