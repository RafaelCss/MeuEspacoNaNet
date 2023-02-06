import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    background-color :black;
    color:#1d3712;
  }
  li{
    color:#1d3712;
  }
  button {
    cursor: pointer;
  }


  background-color :black;
  color:#1d3712;


`;
export default GlobalStyle;

/* Cor primária: #00FFA7 (verde claro)
Cor secundária: #FFC107 (amarelo)
Texto: branco #FFFFFF
Botões e elementos destacados: #00FFA7 (verde claro)
Fundo preto: #000000 */
