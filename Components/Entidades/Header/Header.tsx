import Link from "next/link";
import React, { ReactElement } from "react";
import Buscador from "../../Elementos/Busca/Buscador";
import { HeaderPage } from "./Style";

export default function Cabecalho(): ReactElement {
  return (
    <HeaderPage>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/Projetos'>
        <a>Projetos</a>
      </Link>
      <Link href='/Contato'>
        <a>Contato</a>
      </Link>
      <Buscador />
    </HeaderPage>
  );
}
