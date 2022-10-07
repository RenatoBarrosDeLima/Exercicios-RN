import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';
import If from './If';

const CompFunc = props => {
  const usuario = props.usuario || {};

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.fontG}>Usuário Logado:</Text>
        <Text style={Estilo.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};

export default CompFunc;
