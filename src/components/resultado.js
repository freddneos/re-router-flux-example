import React, {Component} from 'react';
import {StyleSheet,TouchableHighlight,Image,View} from 'react-native';
import {  Actions } from 'react-native-router-flux';
const cara = require('../img/moeda_cara.png')
const coroa = require('../img/moeda_coroa.png')

export default class SobreJogo extends Component{
    render(){
        return(
            <View style={style.resultado}>
                <Image source={cara}/>
                <Image source={coroa}/>
            </View>
        )
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