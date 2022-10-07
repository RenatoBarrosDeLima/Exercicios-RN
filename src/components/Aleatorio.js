import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

const Aleatorio = ({ min, max }) => {
  function gerarNumero(min, max) {
    const delta = max - min + 1;
    const value = parseInt(Math.random() * delta) + min;
    return Math.round(value);
  }

  return (
    <Text style={Estilo.fontG}>
      O valor aleatório é = {gerarNumero(min, max)}
    </Text>
  );
};

export default Aleatorio;
