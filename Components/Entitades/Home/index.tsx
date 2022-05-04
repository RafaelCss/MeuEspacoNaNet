import { ReactElement } from 'react'
import Menu from '../../Servicos/Header/Index'
import Banner from './AnimacaoTexto/Index'
import  Rodape  from '../../Servicos/Footer/Index'
import Cards from './Apresentacao/Cards'



function Home(): ReactElement {
  return (
    <>
      <Menu />
      <Banner />
      <Cards />
      <Rodape />
    </>
  )
}

export default Home


