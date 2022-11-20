import axios from 'axios';
import Mostruario, { DadosGitHub } from './Apresentacao';

interface Retorno {
  resposta: DadosGitHub[];
}

export default function PageProjetos({ resposta }: Retorno) {
  return (
    <>
      <Mostruario resposta={resposta} key={'lista-de-projetos'} />
    </>
  );
}

export async function getServerSideProps() {
  const resposta = axios
    .get('https://api.github.com/users/RafaelCss/repos')
    .then(res => res.data as DadosGitHub[])
    .catch(err => err);
  return {
    props: { resposta } // will be passed to the page component as props
  };
}
