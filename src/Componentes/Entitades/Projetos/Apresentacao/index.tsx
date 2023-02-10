import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { CardProjeto, ContainerProjetos, FotoPerfil, Paragrafo, Titulo } from './Style';
import { BannerHome } from '../../../Animacoes/AnimacaoTexto/Style';
import Link from 'next/link';
import axios from 'axios';
import { List, Space } from 'antd';
import { Card, CardCarousel, ContainerCards } from '../../Home/Apresentacao/Style';

interface Retorno {
  resposta: DadosGitHub[];
}

export interface DadosGitHub {
  id: string | number;
  html_url: string;
  description: string;
  name: string;
}
export default function Mostruario(): ReactElement {
  const [dadosGitHub, setDadosGitHub] = useState<DadosGitHub[]>();

  useEffect(() => {
    axios
      .get('https://api.github.com/users/RafaelCss/repos')
      .then(res => setDadosGitHub(res.data))
      .catch(err => err);
  }, []);

  return (
    <ContainerProjetos>
      <Titulo>Projetos</Titulo>
      {dadosGitHub &&
        dadosGitHub.map(item => (
          <CardProjeto id={item.id as string}>
            <Space direction="vertical">
              <Link href={item.html_url}>{<Paragrafo>{item.name}</Paragrafo>}</Link>
            </Space>
            <Space direction="vertical">
              <p>{item.description}</p>
            </Space>
          </CardProjeto>
        ))}
    </ContainerProjetos>
  );
}
