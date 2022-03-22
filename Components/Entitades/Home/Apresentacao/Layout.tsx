import { useEffect, useState } from "react";
import { BannerHome, TextCursor, Container } from "./Style";

function Banner() {
  const mensagem = "SEJA BEM VINDO !";

  const [texto, setTexto] = useState("");

  const animacaoTexto = (texto1, i = 0) => {
    if (i < mensagem.length) {
      setTexto(texto1.slice(0, i + 1));
      setTimeout(() => {
        animacaoTexto(texto1, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    animacaoTexto(mensagem);
  }, []);

  return (
    <BannerHome>
      <h1>Desenvolvedor Web</h1>
      <Container>
        {texto}
        <TextCursor />
      </Container>
    </BannerHome>
  );
}

export default Banner;
