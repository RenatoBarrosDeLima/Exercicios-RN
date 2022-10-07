import React from 'react';
import { Text, FlatList } from 'react-native';

import Estilo from '../estilo';

import produtos from './produtos';

const ListaProdutosV2 = props => {
  function renderLista({ item }) {
    return (
      <Text>
        {item.id} {item.nome} - R$ {item.preco}
      </Text>
    );
  }

  return (
    <>
      <Text style={Estilo.fontG}> Lista de Produtos V2 </Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={renderLista}
      />
    </>
  );
};
export default ListaProdutosV2;
