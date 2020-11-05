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
            
            <View style={Styles.imagemBG}>
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/urano_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} >
                <ScrollView>
                    <Text style = {{color: '#fff', marginTop: 100, padding: 10, fontSize: 18, textAlign:'center'}}>
                    Urano é o sétimo planeta a partir do Sol, o terceiro maior do Sistema Solar e foi o primeiro a ser encontrado por meio de um telescópio, pelo astrônomo William Herschel em 1781. Demora 84 anos terrestres para completar uma rotação ao sol. Urano é o nome do deus grego do céu.
                </Text>
                
                <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23, textAlign: 'center'}}>Curiosidades</Text>
                <Text style = {{color: '#fff', padding: 10, fontSize: 18, textAlign: 'center'}}>
                Urano tem pelo menos 27 luas.
                Terceiro maior planeta do sistema solar.
                Seu nome foi dado em homenagem ao Deus grego Urano

                </Text>
                    </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_urano.png")} />
                </View>


            </View>
            
        </View>
    );
};