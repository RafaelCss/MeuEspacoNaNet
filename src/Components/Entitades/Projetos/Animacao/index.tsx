import { SetStateAction, useEffect, useState } from 'react';
import { Fundo, Tijolos } from './Style';
import cores from './Cores';
import tijolos from './Cores';

export default function Exibicao() {
  const [cor, setCor] = useState('');
  const [tijolo, setTijolo] = useState('');
  function mudarCor() {
    let ix: SetStateAction<string>;
    for (let i = 0; i < cores.length; i++) {
      let index = Math.floor(Math.random() * cores.length);
      ix = cores[index];
      setTijolo(`${index * 5}px`);
    }
    setCor(ix);
  }
  useEffect(() => {
    setInterval(() => {
      mudarCor();
    }, 1000);
  }, [cor]);

  return (
    <Fundo>
      {tijolos.map(item => {
        return <Tijolos key={item} style={{ backgroundColor: `${cor}`, width: tijolo }} />;
      })}
    </Fundo>
  );
}
