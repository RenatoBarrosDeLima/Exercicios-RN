import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

const App = () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdeNumeros={14} />
      {/* <FlexboxV4 /> */}
      {/* <FlexboxV3 /> */}
      {/* <FlexboxV2 /> */}
      {/* <FlexboxV1 /> */}
      {/* <DigiteSeuNome /> */}
      {/* <ListaProdutosV2 /> */}
      {/* <ListaProdutos /> */}
      {/* <UsuarioLogado usuario={{ nome: 'Lima', email: 'lima@gmail.com' }} /> */}
      {/* <Familia>
        <Membro nome="Bia" sobrenome="Cristina" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Fernanda" />
        <Membro nome="Aline" sobrenome="Silva" />
        <Membro nome="Ruth" sobrenome="Fernanda" />
      </Familia> */}
      {/* <Diferenciar /> */}
      {/* <ContadorV2 /> */}
      {/* <MinMax min={3} max={4} /> */}
      {/* <Aleatorio min={1} max={60} /> */}
      {/* <CompPadrao /> */}
      {/* <Comp1 /> */}
      {/* <Comp2 /> */}
      {/* <Primeiro /> */}
      {/* <Titulo principal="Meu nome" secundario="Meu sobrenome" /> */}
      {/* <Botao /> */}
      {/* <Contador inicial={100} passo={10} /> */}
      {/* <Contador /> */}
      {/* <Pai /> */}
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flexGrow: 1, // Pode crescer e ocupar a tela toda
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
