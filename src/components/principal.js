import React,{ Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native'
import {Actions} from 'react-native-router-flux'


const logo = require('../img/logo.png')
const btnJogar = require('../img/botao_jogar.png')
const btnSobreJogo = require('../img/sobre_jogo.png')
const btnOutrosJogos = require('../img/outros_jogos.png')

export default class Principal extends Component{

    render(){
        return(
            <View style={style.cenaPrincipal}>
                <View style={style.apresentacaoJogo}>
                    <Image source={logo} />
                    <TouchableHighlight onPress={()=>{Actions.resultado()}}>
                        <Image source={btnJogar} />
                    </TouchableHighlight>
                </View>
                <View style={style.rodape}>
                <TouchableHighlight onPress={()=> { Actions.sobrejogo()}}>
                    <Image source={btnSobreJogo} />
                </ TouchableHighlight>
                <TouchableHighlight onPress={()=> { Actions.outrosjogos()}}>
                    <Image source={btnOutrosJogos} />
                </ TouchableHighlight>
                </View>
            </View>
        )
    }
}
style  = StyleSheet.create({
    cenaPrincipal:{
        flex:1,
        backgroundColor: '#61BD8C',
    },
    apresentacaoJogo:{
        flex:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rodape:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})