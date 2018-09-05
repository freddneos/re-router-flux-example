/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router,Scene} from 'react-native-router-flux'

import Principal from './src/components/principal'
import SobreJogo from './src/components/sobreJogo'
import Resultado from './src/components/resultado'
import OutrosJogos from './src/components/outrosJogos'


export default class App extends Component {
  render() {
    return (
       <Router >
         <Scene key='root'>
          <Scene key = {'principal'}   component={Principal} title='Principal' initial />
          <Scene key = {'sobrejogo'}   component={SobreJogo}/>
          <Scene key = {'outrosjogos'} component={OutrosJogos}/>
          <Scene key = {'resultado'} component={Resultado}/>
         </Scene>
       </Router>
       
    );
  }
}
 
