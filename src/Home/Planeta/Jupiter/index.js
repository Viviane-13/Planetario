import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView} from 'react-native';

import Styles from './estilos';
//import AppBar from './components/components';
//import AppBar from './components/AppBar';
import BotaoVoltar from '../Components/Back';

export default function Jupiter({navigation}) {
    return(
        
        <View style={Styles.container}>
            {/* <AppBar navigation={navigation} /> */}
            <ImageBackground source = {require('../../../assets/background_glitter.jpg')} style = {{width: null, height: null, flex: 1}}>
            <View style={Styles.imagemBG}>
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/jupiter_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} >
                <ScrollView>
                            <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18}}>
                            Júpiter é o maior planeta do Sistema Solar, o quinto a partir do Sol e o quarto corpo celeste mais brilhante no céu – os demais são o Sol, a Lua e Vênus. A massa é 318 vezes superior à da Terra é maior que todos os planetas do Sistema Solar juntos.

                            </Text>
                            <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23}}>Curiosidades</Text>
                        
                             <Text style = {{color: '#fff',padding: 10, fontSize: 18}}>
                             Foi batizado com esse nome em homenagem ao governante do Olimpo, Júpiter, o deus dos deuses.
                            Júpiter, assim como Saturno, exibe um sistema de anéis, contudo são tênues e menos brilhantes, não observáveis a partir da Terra e que só foram descobertos em 1979 pela sonda Voyager 1

                            </Text>
                            </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_jupiter.png")} />
                </View>


            </View>
        </ImageBackground>
        </View>
    );
};