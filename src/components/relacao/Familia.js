import React from 'react';
import { Text } from 'react-native';

const Familia = props => {
  return (
    <>
      <Text> Membros da Família</Text>
      {props.children}
    </>
  );
};
export default Familia;
