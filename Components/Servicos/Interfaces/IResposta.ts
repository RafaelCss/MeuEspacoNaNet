export interface IDadosGitHub {
  response: string[];
}

export interface IRespostaGitHub {
  name: string;
  url: string;
  description?: string;
}

export interface IDadosFormulario {
  nome: string;
  email: string;
  servico: string;
  descricao: string;
  telefone: string;
}
