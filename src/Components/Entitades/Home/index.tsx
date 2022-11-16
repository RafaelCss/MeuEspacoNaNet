import { ReactElement } from 'react';
import Banner from './AnimacaoTexto/Index';
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
