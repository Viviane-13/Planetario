import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView} from 'react-native';

import Styles from './estilos';
//import AppBar from './components/components';
//import AppBar from './components/AppBar';
import BotaoVoltar from '../Components/Back';

export default function Planeta({navigation}) {
    return(
        
        <View style={Styles.container}>
            {/* <AppBar navigation={navigation} /> */}
            <ImageBackground source = {require('../../../assets/background_glitter.jpg')} style = {{width: null, height: null, flex: 1}}>
            <View style={Styles.imagemBG}>
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/venus_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} >
                    <ScrollView>
                    <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18}}>
                O planeta vênus é o segundo planeta do Sistema solar mais próximo do Sol. Também é conhecido como Estrela Dalva, estrela da manhã, estrela da tarde e jóia do céu. Por características similares de massa, densidade e volume é considerado um planeta irmão da Terra. É um dos corpos celestes mais brilhantes no céu além do Sol e da Lua.
                </Text>
                <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23}}>Curiosidades</Text>
                <Text style = {{color: '#fff', padding: 10, fontSize: 18}}>
                A rotação de Vênus ocorre de leste para oeste, contrária a todos os planetas do Sistema Solar
                O planeta recebeu esse nome em homenagem à Vênus, a deusa romana da beleza e do amor.

                </Text>
                    </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_venus.png")} />
                </View>


            </View>
            </ImageBackground>
        </View>
    );
};