import React from 'react';
import { Button } from 'react-native';

const Botao = props => {
  function executar() {
    console.warn('clicou em executar');
  }
  return <Button title="Executar" onPress={executar} />;
};

export default Botao;
