import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#000133',
    },

    cardPergunta:{
        height:100,
        marginTop:140,
        marginBottom:20,
        marginHorizontal:20,
        backgroundColor:'#8AB8FE90',
        alignItems:'center',
        padding:20,
        borderRadius:10
        
    },

    textoPergunta:{
        color:'#FFF',
        fontSize:20,
        textAlign:'center',
    },

    cardRespostas:{
        padding:10,
        marginTop:20,
        //backgroundColor:'#000133',
        alignItems:'center',

        
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    boxOpcoes:{
        backgroundColor:'#E4DFDA',
        borderColor:'#E4DFDA',
        borderRadius:10,

        minWidth:130,
        marginHorizontal:20,
        alignItems:'center',
        padding:10,
        margin:10,

        borderWidth:5

    },

    textoOpcoes:{
        color:'#000133',
    }
    
});

export default estilo;