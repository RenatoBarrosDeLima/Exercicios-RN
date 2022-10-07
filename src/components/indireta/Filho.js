import React from 'react';
import { Button } from 'react-native';

const Filho = props => {
  function gerarNumero(min, max) {
    const delta = max - min + 1;
    return parseInt(Math.random() * delta) + min;
  }

  return (
    <>
      <Button
        title="Executar"
        onPress={() => {
          const n = gerarNumero(props.min, props.max);
          props.funcao(n);
        }}
      />
    </>
  );
};
export default Filho;
