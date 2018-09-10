
import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux'

import Principal from './components/principal'
import SobreJogo from './components/sobreJogo'
import Resultado from './components/resultado'
import OutrosJogos from './components/outrosJogos'


const Rotas = () => (
  
       <Router >
         <Scene key='root'>
          <Scene key = {'principal'}   component={Principal} title='Principal' initial />
          <Scene key = {'sobrejogo'}   component={SobreJogo}/>
          <Scene key = {'outrosjogos'} component={OutrosJogos}/>
          <Scene key = {'resultado'} component={Resultado}/>
         </Scene>
       </Router>   
)
 
export default Rotas;