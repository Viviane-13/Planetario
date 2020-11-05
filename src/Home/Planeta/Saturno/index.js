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
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/saturno_fundo.png")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card} >
                <ScrollView>
                            <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18, textAlign: 'center'}}>
                            Saturno é o sexto planeta a partir do Sol, e o segundo maior do sistema solar. O primeiro é Júpiter. É conhecido pelo complexo sistema de anéis formados principalmente por gelo e poeira cósmica e possui 53 luas conhecidas e outras nove em pesquisa.

                            </Text>
                            <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23, textAlign: 'center'}}>Curiosidades</Text>
                            <Text style = {{color: '#fff', padding: 10, fontSize: 18, textAlign: 'center'}}>
                                Seu nome  é em homenagem ao Deus do tempo Saturno da mitologia Romana. Tem 82 luas.
                             </Text>
                            </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_saturno.png")} />
                </View>

          
            </View>
       
        </View>
    );
};