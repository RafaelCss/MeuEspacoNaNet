import React, { useEffect, useState } from 'react';
import PageContato from '../Componentes/Entitades/Contato';
import Home from '../Componentes/Entitades/Home';
import PageProjetos from '../Componentes/Entitades/Projetos';

export default function PaginaInicial() {
  return (
    <>
      <Home />
      <PageProjetos />
      <PageContato />
    </>
  );
}
