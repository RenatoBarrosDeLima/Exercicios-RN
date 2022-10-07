import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

const MinMax = props => {
  return (
    <Text style={Estilo.fontG}>
      O valor {props.min} é marior que o Valor {props.max}
    </Text>
  );
};

export default MinMax;
