import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#000133'
    },

    card:{
    
        backgroundColor:'#E4DFDA20',
        alignItems:"center",
        borderRadius:20,
        marginHorizontal:20,
        marginVertical:100,
        padding:20
    },

    texto:{
        color:'#E4DFDA',
        fontSize:22
    },

    img:{
        width:209,
        height:225,
        marginVertical:30
    },

    botao:{
        borderRadius:50,
        backgroundColor:'#8AB8FE90',
        height:80,
        minWidth:250,
        alignItems:"center",
    },

    textoBotao:{
        color:'#000133',
        padding:25,
        fontSize:18
    }

});

export default estilo;
