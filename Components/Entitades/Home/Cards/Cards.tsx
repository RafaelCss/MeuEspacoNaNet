import { ContainerTecnologias, Titulo, Card, ContainerCards } from "./Style";
import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  const tecnologias = [
    {
      tec: "JavaScript",
      link: "",
      img: "/image/javascript.png",
      comentario: "",
    },
    {
      tec: "C#",
      link: "",
      img: "/image/cshap.png",
      comentario: "",
    },
    {
      tec: "ReactJS",
      link: "",
      img: "/image/react.png",
      comentario: "",
    },
    {
      tec: "HTML",
      link: "",
      img: "/image/html.png",
      comentario: "",
    },
    {
      tec: "CSS",
      link: "",
      img: "/image/css.png",
      comentario: "",
    },
    {
      tec: "Orm Prisma",
      link: "",
      img: "/image/javascript.png",
      comentario: "",
    },
    {
      tec: "Entity Framework",
      link: "",
      img: "/image/cshap.png",
      comentario: "",
    },
    {
      tec: "Mysql",
      link: "",
      img: "/image/react.png",
      comentario: "",
    },
    {
      tec: "Ant Design",
      link: "",
      img: "/image/html.png",
      comentario: "",
    },
    {
      tec: "NextJS",
      link: "",
      img: "/image/css.png",
      comentario: "",
    },
    {
      tec: "TypeScript",
      link: "",
      img: "/image/javascript.png",
      comentario: "",
    },
    {
      tec: "Alura Cursos",
      img: "/image/javascript.png",
      link: "https://cursos.alura.com.br/user/rafael-souza44/fullCertificate/3ea0b3c966e6efaae83e50366cbb3055",
      comentario: "Certificado de cursos feitos na Alura",
      botao: "Certificado",
    },
  ];

  return (
    <ContainerTecnologias>
      <Titulo>
        <h1>Tecnologias</h1>
      </Titulo>
      <ContainerCards>
        {tecnologias.map((i) => {
          console.log(i.link);
          return (
            <Card key={Math.random()}>
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
