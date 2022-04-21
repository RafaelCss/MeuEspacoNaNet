import {
  ContainerTecnologias,
  Titulo,
  Card,
  ContainerCards,
  CardCarousel,
  CardCursos
} from './Style'
import Image from 'next/image'
import Link from 'next/link'
import { tecnologias, cursos } from './tecnologias'

export default function CarrosselTecnologias() {
  return (
    <ContainerTecnologias>
      <Titulo>Tecnologias</Titulo>
      <ContainerCards>
        <CardCarousel autoplay>
          {tecnologias.map((item) => {
            return (
              <>
                <Card id={item.tec}>
                  <Image
                    src={item.img}
                    alt={item.tec}
                    width={200}
                    height={200}
                  />
                </Card>
              </>
            )
          })}
        </CardCarousel>
      </ContainerCards>
      <ContainerCards>
        <Titulo>Cursos e Formações</Titulo>
        <>
        {cursos.map((item, index) => {
          return (
            <>
              <CardCursos key={index.toString()}>
                <Link  href={item.link} passHref>
                <Image 
                src={item.img} 
                alt={item.tec} 
                width={200} 
                height={200} />
                </Link>
              </CardCursos>
            </>
          )
        })}
        </>
      </ContainerCards>
    </ContainerTecnologias>
  )
}
