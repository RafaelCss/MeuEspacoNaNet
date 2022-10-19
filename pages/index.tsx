import React from 'react';
import Home from '../Components/Entitades/Home';
import Head from 'next/head';

export default function PaginaInicial() {
  return <Home />;
}

PaginaInicial.serverSideRender = async () => {
  return {
    props: {}
  };
};
