import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

import Filho from './Filho';

const CompFunc = props => {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text style={Estilo.fontG}>{num}</Text>
      <Filho min={1} max={20} funcao={exibirValor} />
    </>
  );
};
export default CompFunc;
