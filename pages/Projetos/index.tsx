import React, { ReactElement } from "react";
import Cabecalho from "../../Components/Header/Header";
import { GetApi } from "../api/getapi";
export default function Projetos(): ReactElement {


  return (
    <div>
      <Cabecalho />
      <p>Meus Projetos</p>
    </div>
  );
}
