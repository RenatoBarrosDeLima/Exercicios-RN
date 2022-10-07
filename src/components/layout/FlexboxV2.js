import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

const FlexboxV2 = props => {
  return (
    <>
      <View style={style.FlexV2}>
        <Quadrado cor={'#ff801a'} />
        <Quadrado cor={'#50d1f6'} />
        <Quadrado cor={'#DD22c1'} />
        <Quadrado cor={'#8312ed'} />
        <Quadrado cor={'#36c9a7'} />
      </View>
    </>
  );
};
export default FlexboxV2;

const style = StyleSheet.create({
  FlexV2: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#000',
  },
});
