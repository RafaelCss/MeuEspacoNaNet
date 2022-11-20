import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ContainerProjetos, FotoPerfil, Titulo } from './Style';
import { BannerHome } from '../../../Animacoes/AnimacaoTexto/Style';
import Link from 'next/link';
import axios from 'axios';

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
  const [valor, setValor] = useState<DadosGitHub[]>();

  useEffect(() => {
    const resposta = axios
      .get('https://api.github.com/users/RafaelCss/repos')
      .then(res => setValor(res.data))
      .catch(err => err);
  }, []);

  return (
    <>
      <BannerHome>
        <Titulo>Projetos</Titulo>
      </BannerHome>
      <ContainerProjetos>
        <ul>
          {valor &&
            valor.map(item => (
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
