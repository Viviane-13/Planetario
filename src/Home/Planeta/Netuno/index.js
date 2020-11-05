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
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/netuno_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                
                <View style ={Styles.card}>
                <ScrollView>
                    <Text style = {{color: '#fff', marginTop: 100, padding: 10, fontSize: 18, textAlign: 'center'}}>
                    Netuno é o oitavo planeta a partir do Sol. É um gigante gasoso, bem como Júpiter, Saturno e Urano. Está distante 4,5 bilhões de quilômetros do Sol e demora 156 anos terrestres para completar uma órbita. Foi descoberto em 1846 e recebeu o nome do deus romano do mar.</Text>

                    <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23, textAlign: 'center'}}>Curiosidades</Text>
                    <Text style = {{color: '#fff', padding: 10, fontSize: 18, textAlign: 'center'}}>
                         Netuno possui 14 luas descobertas.
                        Foi descoberto em 23 de setembro de 1846 por uma previsão matemática.
                    </Text>

                
                <Text style = {{color: '#fff', padding: 10, fontSize: 18}}>
                
                </Text>
                    </ScrollView>
               
                
                
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_netuno.png")} />
                </View>
            </View>
            
        </View>
    );
};