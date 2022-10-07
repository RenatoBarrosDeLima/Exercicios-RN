import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import Estilo from './estilo';

const Contador = ({ inicial = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(inicial);

  function inc() {
    setNumero(numero + passo);
  }

  function dec() {
    setNumero(numero - passo);
  }
  return (
    <>
      <Text style={Estilo.fontG}> {numero} </Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};

export default Contador;
