import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { CardProjeto, ContainerProjetos, FotoPerfil, Titulo } from './Style';
import { BannerHome } from '../../../Animacoes/AnimacaoTexto/Style';
import Link from 'next/link';
import axios from 'axios';
import { List } from 'antd';
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
    <ContainerCards>
      <Titulo>Projetos</Titulo>
      {dadosGitHub &&
        dadosGitHub.map(item => (
          <CardProjeto id={item.id as string}>
            <Link href={item.html_url}>{item.name}</Link>
            <p>{item.description}</p>
          </CardProjeto>
        ))}
    </ContainerCards>
  );
}
