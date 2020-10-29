import React from 'react';
import {View,Text, Image} from 'react-native';
import estilo from './estilo';
import quizErro from '../../assets/quizErro.png';

export default function TelaErro(){
    
    return(
        
        <View style={estilo.container}>

                <View style={estilo.card}>

                    <View>
                        <Text style={estilo.texto}> Ooops! </Text>
                    </View>

                    <Image style={estilo.img} source={quizErro}/>

                    <View>
                        <Text style={estilo.texto}>A resposta correta é: <Text style={{color:'#8AB8FE'}}>Mercúrio</Text>
                        </Text>
                    </View>


                </View>
        </View>
    )
}