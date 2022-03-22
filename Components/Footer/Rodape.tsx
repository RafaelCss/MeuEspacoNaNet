import { RodapeHome } from "./Style";
import Image from "next/image";
import Link from "next/link";
import github from "../../public/image/github.svg";

export function Rodape() {
  return (
    <RodapeHome>
      <Link href={"https://github.com/RafaelCss"}>
        <a>
          <Image src={github} width={30} height={30}></Image>
        </a>
      </Link>
    </RodapeHome>
  );
}
