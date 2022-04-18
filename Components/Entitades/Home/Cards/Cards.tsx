import {
  ContainerTecnologias,
  Titulo,
  Card,
  ContainerCards,
  CardCarousel,
} from './Style'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'antd'
import { tecnologias } from './tecnologias'

export default function CarrosselTecnologias() {

  function ClickCard() {
    console.log('clicou')
  }

  return (
    <>
      <Titulo><h1>Minhas Tecnologias</h1></Titulo>
      <Carousel   autoplay afterChange={ClickCard}>
        {tecnologias.map((item, index) => (
          <CardCarousel key={index}>
            <h2>{item.tec}</h2>
            <Image src={item.img} width={100} height={100} alt="imagens" />
            <h2>{item.comentario}</h2>
              <Link  href={item.link}>
                <a>{item.botao}</a>
              </Link>
          </CardCarousel>
        ))}
      </Carousel>
      <ContainerTecnologias>
        <ContainerCards>
          <Card></Card>
        </ContainerCards>
      </ContainerTecnologias>
    </>
  )
}
