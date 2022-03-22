import Link from "next/link";
import React, { ReactElement } from "react";
import { MenuHeader } from "./Style";



export default function Menu(): ReactElement {
  return (
    <MenuHeader className='sssss'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/Projetos'>
        <a>Projetos</a>
      </Link>
      <Link href='/Contato'>
        <a>Contato</a>
      </Link>
    </MenuHeader>
  );
}
