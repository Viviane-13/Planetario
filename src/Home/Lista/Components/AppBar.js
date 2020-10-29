import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar = ({title, navigation}) => (
    <Appbar.Header style={styles.app}>
        <Appbar.Action icon="menu" onPress={() => {navigation.openDrawer()}} />
        <Appbar.Content title={title} style={styles.content} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
);

export default AppBar;

const styles = StyleSheet.create({
    app: {
        height: 75,
        backgroundColor: '#000133'
    },
    content: {
        alignItems: 'center',
        marginLeft: -5,
    }
});