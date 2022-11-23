import Link from 'next/link';
import { MenuHeader, Tag } from './Style';

export default function Menu() {
  return (
    <MenuHeader>
      <Link href="/">
        <Tag> Home</Tag>
      </Link>
      <Link href="/Projetos">
        <Tag>Projetos</Tag>
      </Link>
      <Link href="/Contato">
        <Tag>Contato</Tag>
      </Link>
    </MenuHeader>
  );
}
