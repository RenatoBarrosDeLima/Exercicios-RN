import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado';

const FlexboxV3 = props => {
  return (
    <>
      <View style={style.FlexV3}>
        <Quadrado cor={'#ff801a'} lado={20} />
        <Quadrado cor={'#50d1f6'} lado={30} />
        <Quadrado cor={'#DD22c1'} lado={40} />
        <Quadrado cor={'#8312ed'} lado={50} />
        <Quadrado cor={'#36c9a7'} lado={60} />
      </View>
    </>
  );
};
export default FlexboxV3;

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
