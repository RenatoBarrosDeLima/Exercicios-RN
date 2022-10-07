import React from 'react';
import { View } from 'react-native';

const Quadrado = props => {
  const lado = props.lado || 35;

  return (
    <>
      <View
        style={{
          height: lado,
          width: lado,
          backgroundColor: props.cor || '#000',
        }}
      />
    </>
  );
};
export default Quadrado;
