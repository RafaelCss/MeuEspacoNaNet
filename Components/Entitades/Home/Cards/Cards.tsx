import { ContainerTecnologias, Titulo, Card, ContainerCards } from "./Style";
import Image from "next/image";
import Link from "next/link";
import { tecnologias } from "./tecnologias";

export default function Cards() {
  return (
    <ContainerTecnologias>
      <Titulo>
        <h1>Tecnologias</h1>
      </Titulo>
      <ContainerCards>
        {[...tecnologias].map((i, index) => {
          return (
            <Card key={index + 1}>
              <p>{i.tec}</p>
              <Image alt='logo' src={i.img} width={50} height={50} />
              <p>{i.comentario}</p>
              <Link href={i.link}>
                <a>{i.botao}</a>
              </Link>
            </Card>
          );
        })}
      </ContainerCards>
    </ContainerTecnologias>
  );
}
