import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

export default function () {
  return <Text style={Estilo.fontG}> Comp #Oficial</Text>;
}

function Comp1() {
  return <Text style={Estilo.fontG}> Comp #01</Text>;
}

function Comp2() {
  return <Text style={Estilo.fontM}> Comp #02</Text>;
}

export { Comp1, Comp2 };
