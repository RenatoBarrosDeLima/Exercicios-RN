import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';
const ContadorDisplay = props => {
  return (
    <View style={style.Display}>
      <Text style={[Estilo.fontG, style.DisplayText]}> {props.num} </Text>
    </View>
  );
};
export default ContadorDisplay;

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#fff',
  },
});
