import { Card } from "./Style";
import Image from "next/image";

interface Tecnologias {
  tecnologias: [{ tec: string; ano: number }];
  //itens: [{ tec: string; img: string; comentario: string }];
}
const tecnologias = [
  {
    tec: "JavaScript",
    ano: 1991,
  },
  { tec: "JavaScript", ano: 1991 },
];

function RenderCards(tecnologias: Tecnologias) {
  return (
    <Card>
      {tecnologias.map((i) => {
        return (
          <Card key={Math.random()}>
            <p>{i.tec}</p>
            <Image src={i.img} width={50} height={50} />
            <p>{i.comentario}</p>
          </Card>
        );
      })}
    </Card>
  );
}
RenderCards(tecnologias);
export default RenderCards;