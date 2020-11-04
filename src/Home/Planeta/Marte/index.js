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
                <ImageBackground style={{width: 450, height: 300}} source={require("../../../assets/marte_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} >
                <ScrollView>
                    <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18}}>
                    Marte é o quarto planeta mais próximo do Sol e o segundo menor planeta do sistema solar, depois de Mercúrio. Sua coloração avermelhada é caracterizada pela presença de óxido de ferro na sua superfície. Por isso, recebeu o nome de Marte, em homenagem ao deus romano da guerra. Marte é um dos planetas mais estudados do sistema solar. Podendo ser visto da Terra a olho nu, ou seja, sem auxílio de um telescópio. Quarto planeta do sistema solar, sua distância média ao Sol é de 228 milhões de km.

                </Text>
                <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23}}>Curiosidades</Text>
                <Text style = {{color: '#fff', padding: 10, fontSize: 18}}>
                Possui o maior cânion do sistema solar: Valles Marineris
                Abriga o mais alto vulcão do sistema solar: O monte olimpo


                </Text>
                    </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_marte.png")} />
                </View>


            </View>
            </ImageBackground>
        </View>
    );
};