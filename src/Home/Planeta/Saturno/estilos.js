import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    imagemBG: {
        //backgroundColor: '#0F0',
        height: 200,
        position: 'relative'
    },
    box: {
        position: 'absolute',
        marginTop: 170,
        alignSelf: 'center'
    },
    circle: {
        alignSelf: 'center',
        //backgroundColor: '#444',
        width: 140,
        height: 140,
        borderRadius: 100,
        position: 'absolute',
        alignItems: 'center'
    },
    card: {
        marginTop: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.11)',
        //backgroundColor: '#FFF',
        height: 500,
        width: 370,
        borderRadius: 20,
    },
    image: {
        marginTop: -50,
        width: 220,
        height: 220
    }
});

export default styles;