import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import Estilo from './estilo';

const CompFunc = props => {
  const [nome, setNome] = useState('Teste');

  return (
    <View>
      <Text> Texto atual: {nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
    </View>
  );
};
export default CompFunc;
