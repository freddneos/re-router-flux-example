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

import Rotas from './src/rotas'

export default class App extends Component {
  render() {
    return (
      <Rotas /> 
    );
  }
}
 
