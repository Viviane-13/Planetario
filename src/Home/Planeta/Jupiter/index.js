import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';

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
                <View style={Styles.card} />
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_jupiter.png")} />
                </View>


            </View>
        </ImageBackground>
        </View>
    );
};