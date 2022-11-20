import { ReactElement } from 'react';
import Banner from '../../Animacoes/AnimacaoTexto/Index';
import Cards from './Apresentacao/Cards';

function Home(): ReactElement {
  return (
    <>
      <Banner />
      <Cards />
    </>
  );
}

export default Home;
