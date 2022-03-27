import { RodapeHome } from "./Style";
import Image from "next/image";
import Link from "next/link";
import github from "../../public/image/github.svg";

export function Rodape() {
  return (
    <RodapeHome>
      <Link href={"https://github.com/RafaelCss"}>
        <a>
          <Image color='white' src={github} width={30} height={30} alt={"github"}></Image>
        </a>
      </Link>
    </RodapeHome>
  );
}
