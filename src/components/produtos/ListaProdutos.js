import React from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo';

import produtos from './produtos';

const ListaProdutos = props => {
  function renderLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          {p.id} {p.nome} tem preço R$ {p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={Estilo.fontG}> Lista de Produtos </Text>
      {renderLista()}
    </>
  );
};
export default ListaProdutos;