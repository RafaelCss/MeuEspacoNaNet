import { RodapeHome } from './Style';
import { WhatsAppOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Rodape() {
  return (
    <RodapeHome>
      <Link href={'https://github.com/RafaelCss'}>
        <a>
          <GithubOutlined style={{ color: 'white', fontSize: '24px' }} />
        </a>
      </Link>
      <Link href={'https://www.linkedin.com/in/rafael-carlos-a1a007201/'}>
        <a>
          <LinkedinOutlined style={{ color: 'white', fontSize: '24px' }} />
        </a>
      </Link>
      <Link
        href={
          'https://wa.me/+5532991511671?text=Oi,%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho%20..%20'
        }
      >
        <a>
          <WhatsAppOutlined style={{ color: 'white', fontSize: '24px' }} />
        </a>
      </Link>
      <p style={{ color: 'white' }}>&copy; since 2022 Feito por Me Rafael C. &hearts;</p>
    </RodapeHome>
  );
}
