import React from 'react';
import{View, Text, TouchableOpacity} from 'react-native';
import estilo from './estilo';



export default function Quiz(props){

    const abrirTelaAcerto = ()=>{
         props.navigation.navigate('TelaAcerto');
    }

    const abrirTelaErro = () =>{
        props.navigation.navigate('TelaErro');
    }

    const abrirTelaFinal = () =>{
        props.navigation.navigate('AcertoFinal');
    }



    return(

        <View style={estilo.container}>

            <View style={estilo.cardPergunta}>
                <Text style={estilo.textoPergunta}>Qual o planeta mais próximo do sol?</Text>
            </View>

            <View style={estilo.cardRespostas}>

                <TouchableOpacity 
                    onPress={abrirTelaAcerto}
                    style={estilo.boxOpcoes}>

                    <Text style={estilo.textoOpcoes}>a. Mercúrio</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={abrirTelaErro}
                    style={estilo.boxOpcoes}>
                
                    <Text style={estilo.textoOpcoes}>b. Terra</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={abrirTelaErro}
                    style={estilo.boxOpcoes}>

                    <Text style={estilo.textoOpcoes}>c. Saturno</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={abrirTelaFinal}
                     style={estilo.boxOpcoes}>

                    <Text style={estilo.textoOpcoes}>d. Vênus</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}