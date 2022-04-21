import { RodapeHome } from "./Style";
import Image from "next/image";
import Link from "next/link";
import github from '../../../public/image/github.svg';
import linkedin from "../../../public/image/linkedin.svg";

export  default function Rodape() {
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
      Contato : (32) 99151-1671 
    </RodapeHome>
  );
}
