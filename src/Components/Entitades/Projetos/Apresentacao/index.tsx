import { ReactElement, useEffect, useState } from 'react';
import { ContainerProjetos, FotoPerfil, Titulo } from './Style';
import axios from 'axios';
import { BannerHome } from '../../Home/AnimacaoTexto/Style';
import Image from 'next/image';

export default function Mostruario(): ReactElement {
  const [valor, setValor] = useState([]);

  useEffect(() => {
    axios
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
                <a href={item.html_url}>{item.name}</a>
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
