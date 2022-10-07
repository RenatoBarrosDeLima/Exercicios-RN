import React from 'react';
import { Text, Platform } from 'react-native';

import Estilo from './estilo';

const Diferenciar = props => {
  if (Platform.OS === 'android') {
    return (
      <>
        <Text style={Estilo.fontG}> Android </Text>
      </>
    );
  } else if (Platform.OS === 'ios') {
    return (
      <>
        <Text style={Estilo.fontG}> IOS </Text>
      </>
    );
  } else {
    return (
      <>
        <Text style={Estilo.fontG}> Nenhum dos dois </Text>
      </>
    );
  }
};
export default Diferenciar;
