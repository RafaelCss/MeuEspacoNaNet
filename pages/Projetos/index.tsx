import React, { ReactElement } from "react";
import Cabecalho from "../../Components/Header/Header";
import { GetApi } from "../api/getapi";
export default function Projetos(): ReactElement {
  function dados() {
    const response = GetApi;
    console.log(response);
  }
  dados();

  return (
    <div>
      <Cabecalho />
      <p>Meus Projetos</p>
    </div>
  );
}
