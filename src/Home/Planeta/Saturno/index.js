import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';

import Styles from './estilos';
//import AppBar from './components/components';
//import AppBar from './components/AppBar';
import BotaoVoltar from '../Components/Back';

export default function Planeta({navigation}) {
    return(
        
        <View style={Styles.container}>
            {/* <AppBar navigation={navigation} /> */}

            <View style={Styles.imagemBG}>
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/saturno_fundo.png")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} />
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_saturno.png")} />
                </View>


            </View>
        </View>
    );
};