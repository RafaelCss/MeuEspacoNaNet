/* eslint react/prop-types: 0 */
import {
  ContainerTecnologias,
  Titulo,
  Card,
  ContainerCards,
  CardCarousel,
  CardCursos,
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
    <ContainerCards>
      <Titulo>Tecnologias</Titulo>
      <CardCarousel className="container-CardCarousel">
        {tecnologias?.map((item, index) => {
          return (
            <>
              <Card key={item.id.toString()} id={item.tec}>
                <img key={item.id} src={item.img} alt={item.tec} />
              </Card>
            </>
          );
        })}
      </CardCarousel>
      <ContainerCards className="container-Card">
        <>
          <Titulo>Cursos e Formações</Titulo>
          {cursos?.map((item, index) => {
            return item.tec === 'FAM' ? (
              <CardCursos onClick={showModal} key={item.id.toString()}>
                <img key={item.id.toString()} src={item.img} alt={item.tec} />
              </CardCursos>
            ) : (
              <CardCursos key={item.id.toString()}>
                <Link
                  href={item.link}
                  key={item.id.toString()}
                  passHref
                  legacyBehavior
                >
                  <img key={item.id.toString()} src={item.img} alt={item.tec} />
                </Link>
              </CardCursos>
            );
          })}
          <ModalApp
            title="FAM Faculdade das Americas"
            onOk={handleOk}
            msg={`Cursando Sistemas da Informação no 5º período`}
            isModalVisible={isModalVisible}
            onCancel={handleCancel}
          />
        </>
      </ContainerCards>
    </ContainerCards>
  );
}
