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
                    <ImageBackground style={{width: 500, height: 300}} source={require("../../../assets/mercurio_fundo.jpg")} />
                    <BotaoVoltar navigation={navigation} />
                 </View>
                <View style={Styles.box}>
                    
                        <View style={Styles.card}>
                            <ScrollView>
                            <Text style = {{color: '#fff', marginTop: 80, padding: 10, fontSize: 18,textAlign:'center'}}>
                            Mercúrio é o planeta mais próximo ao Sol e o oitavo em tamanho no sistema solar. A distância média é de 57,9 milhões de quilômetros do Sol. É o planeta mais rápido do Sistema Solar, perfazendo 47,87 quilômetros por segundo ao redor do Sol. A superfície é semelhante à da Lua, rochosa e com diversas crateras.
                            </Text>
                            <Text style = {{fontWeight: 'bold', color: '#fff', fontSize: 23, textAlign: 'center'}}>Curiosidades</Text>
                        
                             <Text style = {{color: '#fff',padding: 10, fontSize: 18, textAlign: 'center'}}>
                             Iron Planet -  Por ser constituído basicamente de Ferro.
                            Pode ser visto da Terra a olho nu - Antes do amanhecer e instante após o anoitecer.
                            Seu nome foi dado por dois gregos Apolo e Hermes
                           

                            </Text>
                            </ScrollView>
                           
                        </View>
                        <View style={Styles.circle}>
                        <Image style={Styles.image} source={require("../../../assets/planet_mercury.png")} />
                        </View>
                      
                        
                </View>
            

               
            
       
            
        </View>
    );
};