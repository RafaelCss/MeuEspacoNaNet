import React, { ReactElement } from "react";
import { createContext, useState } from "react";

interface Dados {
  Nome: string;
  Idade: number;
  Password: string | number; // regex de senha (min 8 caracteres, 1 letra maiuscula, 1 letra minuscula, 1 numero)
  Email: string;
  Telefone: string;
  Endereco: string;
  Cidade: string;
  Estado: string;
  Pais: string;
  CEP: string;
  CPF: string;
  RG: string;
  DataNascimento: string;
  Sexo: string;
  EstadoCivil: string;
  Nacionalidade: string;
  Profissao: string;
  Empresa: string;
  Cargo: string;
}

function DadosGitHub(obj: Dados): ReactElement {
  const [dados, setDados] = useState<Dados>();

  return (
    <div>
      <h1>Dados do GitHub</h1>
      <p>Nome: {dados.Nome}</p>
      <p>Idade: {dados.Idade}</p>
      <p>Senha: {dados.Password}</p>
      <p>Email: {dados.Email}</p>
      <p>Telefone: {dados.Telefone}</p>
    </div>
  );
}
