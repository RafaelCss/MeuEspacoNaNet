/* eslint react/prop-types: 0 */
import {
  ContainerTecnologias,
  Titulo,
  Card,
  ContainerCards,
  CardCarousel,
  CardCursos
} from './Style';
import Image from 'next/image';
import Link from 'next/link';
import { tecnologias, cursos } from './tecnologias';
import { ModalApp } from '../../../Modal/Index';
import { useEffect, useState } from 'react';
interface IDadosCards {
  id: number | string;
  tec: string;
  link?: string;
  img: string;
  comentario?: string;
}
export default function CarrosselTecnologias() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    return isModalVisible;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    return isModalVisible;
  };

  return (
    <ContainerTecnologias>
      <Titulo>Tecnologias</Titulo>
      <CardCarousel>
        {tecnologias?.map((item, index) => {
          return (
            <>
              <Card key={item.id.toString()} id={item.tec}>
                <Image key={item.id} src={item.img} alt={item.tec} width={100} height={100} />
              </Card>
            </>
          );
        })}
      </CardCarousel>
      <ContainerCards>
        <Titulo>Cursos e Formações</Titulo>
        {cursos?.map((item, index) => {
          switch (item.tec) {
            case 'FAM':
              return (
                <CardCursos onClick={showModal} key={item.id.toString()}>
                  <Image
                    key={item.id.toString()}
                    src={item.img}
                    alt={item.tec}
                    width={200}
                    height={200}
                  />
                </CardCursos>
              );
            default:
              return (
                <CardCursos key={item.id.toString()}>
                  <Link href={item.link} key={item.id.toString()} passHref>
                    <Image
                      key={item.id.toString()}
                      src={item.img}
                      alt={item.tec}
                      width={200}
                      height={200}
                    />
                  </Link>
                </CardCursos>
              );
          }
        })}
        <ModalApp
          title="FAM Faculdade das Americas"
          onOk={handleOk}
          msg={`Cursando Sistemas da Informação no 3º período`}
          isModalVisible={isModalVisible}
          onCancel={handleCancel}
        />
      </ContainerCards>
    </ContainerTecnologias>
  );
}
