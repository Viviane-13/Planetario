import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Botao({navigation}) {
    return(
        <View style={styles.container}>
            <IconButton icon='keyboard-backspace' color="#fff" style={styles.icon} size={35} onPress={() => {navigation.navigate("Lista")} } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        //backgroundColor: '#F00',
        width: 80,
        height: 50,
        position: 'absolute',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        justifyContent: 'center',
        elevation: 10,
        position: 'absolute',
        marginTop: 50,
    }
});