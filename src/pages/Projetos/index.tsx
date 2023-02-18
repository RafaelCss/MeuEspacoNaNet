import React, { ReactElement } from 'react';
import PageProjetos from '../../Componentes/Entitades/Projetos';
import Rodape from '../../Componentes/Footer/Index';
import Menu from '../../Componentes/Header/Index';

export default function Projetos(): ReactElement {
  return (
    <>
      <Menu />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <PageProjetos />
        <Rodape />
      </div>
    </>
  );
}
