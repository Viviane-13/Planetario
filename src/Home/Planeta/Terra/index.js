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
                <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/terra_fundo.jpg")} />
                <BotaoVoltar navigation={navigation} />
            </View>
            <View style={Styles.box}>
                <View style={Styles.card}>
                <ScrollView>
                    <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18}}>
                    O Planeta Terra é o terceiro dos oito planetas que fazem parte do Sistema Solar. Também conhecido como "Planeta Azul", recebe essa denominação posto que grande parte do planeta é formado por água.
                </Text>
                <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23}}>Curiosidades</Text>
                <Text style = {{color: '#fff', padding: 10, fontSize: 18}}>
                A Baía de Hudson, no Canadá possui uma anomalia que faz com que a gravidade seja menor que no resto do planeta.

                </Text>
                    </ScrollView>
                </View>
                <View style={Styles.circle}>
                    <Image style={Styles.image} source={require("../../../assets/planet_terra.png")} />
                </View>


            </View>
            
        </View>
    );
};