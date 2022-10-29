import Link from 'next/link';
import { MenuHeader } from './Style';

export default function Menu() {
  return (
    <MenuHeader>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/Projetos">
        <a>Projetos</a>
      </Link>
      <Link href="/Contato">
        <a>Contato</a>
      </Link>
    </MenuHeader>
  );
}
