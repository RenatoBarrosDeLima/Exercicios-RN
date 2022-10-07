import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

const Titulo = props => {
  return (
    <React.Fragment key={1}>
      <Text style={Estilo.fontG}> {props.principal}</Text>
      <Text> {props.secundario}</Text>
    </React.Fragment>
  );
};

export default Titulo;
