import React from 'react';
import {View, Text, Image} from 'react-native';
import estilo from './estilo';
import quiz_acerto from '../../assets/quiz_acerto.png';


export default function TelaAcerto(){

    return(

        <View style={estilo.container}>
            
                <View style={estilo.card}>

                    <View>
                        <Text style={estilo.texto}> Parabéns, você acertou! </Text>
                    </View>

                    <Image style={estilo.img} source={quiz_acerto} />

                    <View>
                        <Text style={estilo.texto}>Pontuação: 1</Text>
                    </View>

                </View>
        </View>

    )
}
