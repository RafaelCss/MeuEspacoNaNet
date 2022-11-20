import { ReactElement } from 'react';
import { ContainerProjetos, FotoPerfil, Titulo } from './Style';
import axios from 'axios';
import { BannerHome } from '../../../Animacoes/AnimacaoTexto/Style';
import Link from 'next/link';

interface Retorno {
  resposta: DadosGitHub[];
}

export interface DadosGitHub {
  id: string | number;
  html_url: string;
  description: string;
  name: string;
}
export default function Mostruario({ resposta }: Retorno): ReactElement {
  return (
    <>
      <BannerHome>
        <Titulo>Projetos</Titulo>
      </BannerHome>
      <ContainerProjetos>
        <ul>
          {resposta &&
            resposta.map(item => (
              <li key={item.id}>
                <Link href={item.html_url} legacyBehavior>
                  {item.name}
                </Link>
                <p>{item.description}</p>
              </li>
            ))}
        </ul>
        <FotoPerfil>
          <img alt="minha foto" src={'https://avatars.githubusercontent.com/u/79381624?v=4'} />
        </FotoPerfil>
      </ContainerProjetos>
    </>
  );
}
