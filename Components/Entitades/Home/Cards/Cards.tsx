import { ContainerTecnologias, Titulo, Card, ContainerCards } from "./Style";
import Image from "next/image";

export default function Cards() {
  const tecnologias = [
    {
      tec: "JavaScript",
      img: "/image/javascript.png",
      comentario: "",
    },
    {
      tec: "C#",
      img: "/image/cshap.png",
      comentario: "",
    },
    {
      tec: "ReactJS",
      img: "/image/react.png",
      comentario: "",
    },
    {
      tec: "HTML",
      img: "/image/html.png",
      comentario: "",
    },
    {
      tec: "CSS",
      img: "/image/css.png",
      comentario: "",
    },
  ];

  return (
    <ContainerTecnologias>
      <Titulo>
        <h1>Tecnologias</h1>
      </Titulo>
      <ContainerCards>
        {tecnologias.map((i) => {
          return (
            <Card key={Math.random()}>
              <p>{i.tec}</p>
              <Image src={i.img} width={50} height={50} />
              <p>{i.comentario}</p>
            </Card>
          );
        })}
      </ContainerCards>
    </ContainerTecnologias>
  );
}
