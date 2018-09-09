import React, {Component} from 'react';
import {StyleSheet,TouchableHighlight,Image,View} from 'react-native';
import {  Actions } from 'react-native-router-flux';
const cara = require('../img/moeda_cara.png')
const coroa = require('../img/moeda_coroa.png')

export default class SobreJogo extends Component{
    
    constructor(props){
        super(props);
        this.state = { resultado: ''}
    }
    componentDidMount(){
        const numeroAleatorio = Math.floor(Math.random() * 2)
        var caraOuCoroa = '';

        if (numeroAleatorio === 0 ){
            caraOuCoroa = 'cara'

        }else{
            caraOuCoroa = 'coroa'
        }
        this.setState({resultado : caraOuCoroa})
    }
    render(){
        if(this.state.resultado === 'cara'){
            return(
                <View style={style.resultado}>
                    <Image source={cara}/>
                </View>
            )
        }else{
            return(
                <View style={style.resultado}>
                    <Image source={coroa}/>
                </View>
            )
        }
        
    }
}
const style = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center',
    }

})