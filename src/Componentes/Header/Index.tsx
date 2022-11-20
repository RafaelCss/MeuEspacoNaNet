import Link from 'next/link';
import { MenuHeader } from './Style';

export default function Menu() {
  return (
    <MenuHeader>
      <Link href="/" legacyBehavior>
        Home
      </Link>
      <Link href="/Projetos" legacyBehavior>
        Projeto
      </Link>
      <Link href="/Contato" legacyBehavior>
        Contato
      </Link>
    </MenuHeader>
  );
}
