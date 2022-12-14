import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Estilo from '../estilo';

const MegaNumero = ({ num }) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.fontG, style.Num]}> {num} </Text>
    </View>
  );
};
export default MegaNumero;

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#fff',
  },
});
