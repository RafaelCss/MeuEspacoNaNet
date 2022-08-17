import { RodapeHome } from "./Style";
import Icon, { WhatsAppOutlined } from '@ant-design/icons';
import Image from "next/image";
import Link from "next/link";
import github from '../../public/image/github.svg';
import linkedin from "../../public/image/linkedin.svg";

export default function Rodape() {
  return (
    <RodapeHome>
      <Link href={"https://github.com/RafaelCss"}>
        <a>
          <Image color='white' src={github} width={30} height={30} alt={"github"}></Image>
        </a>
      </Link>
      <Link href={"https://www.linkedin.com/in/rafael-de-souza-a1a007201/"}>
        <a>
          <Image color='white' src={linkedin} width={30} height={30} alt={"linkedin"}></Image>
        </a>
      </Link>
      <Link href={"https://wa.me/+5532991511671?text=Oi,%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho%20..%20"}>
        <a>
          <WhatsAppOutlined style={{color:'black', fontSize:'24px'}} />
        </a>
      </Link>
    </RodapeHome>
  );
}
