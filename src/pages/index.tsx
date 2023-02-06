import React, { useEffect, useState } from 'react';
import PageContato from '../Componentes/Entitades/Contato';
import Home from '../Componentes/Entitades/Home';
import { ContainerTecnologias } from '../Componentes/Entitades/Home/Apresentacao/Style';
import PageProjetos from '../Componentes/Entitades/Projetos';
import Rodape from '../Componentes/Footer/Index';
import Menu from '../Componentes/Header/Index';
import GlobalStyle from '../styles/Global';

export default function PaginaInicial() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'
      }}
    >
      <GlobalStyle />
      <Menu />
      <Home />
      <PageProjetos />
      <PageContato />
      <Rodape />
    </div>
  );
}
