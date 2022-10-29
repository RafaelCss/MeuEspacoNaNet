import { ReactElement, useEffect, useState } from 'react';
import { CorpoPage, FotoPerfil, Titulo } from './Style';
import axios from 'axios';

export default function Mostruario(): ReactElement {
  const [valor, setValor] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/RafaelCss/repos')
      .then(res => setValor(res.data))
      .catch(err => err);
  }, []);

  return (
    <CorpoPage>
      <Titulo>
        <h1>Projetos</h1>
      </Titulo>
      <ul>
        {valor &&
          valor.map(item => (
            <li key={item.id}>
              <a href={item.html_url}>{item.name}</a>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
      <FotoPerfil />
    </CorpoPage>
  );
}
