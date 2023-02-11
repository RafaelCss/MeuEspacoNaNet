import { Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

const ButtonEnviar = styled(ButtonAntd)`
  width: 25rem;
  height: 5vh;
  color: #000000ef;
  border: none;
  -webkit-box-shadow: -11px -15px 40px 1px rgba(157, 247, 139, 0.45);
  -moz-box-shadow: -11px -15px 40px 1px rgba(149, 240, 131, 0.45);
  box-shadow: -11px -15px 40px 1px rgba(159, 240, 83, 0.753);
  background-color: #fbfdfb;
`;

const ButtonLimpar = styled(ButtonAntd)`
  width: 25rem;
  height: 5vh;
  color: #050404;
  border: none;
  -webkit-box-shadow: -11px -15px 40px 1px rgba(250, 107, 107, 0.45);
  -moz-box-shadow: -11px -15px 40px 1px rgba(250, 84, 54, 0.45);
  box-shadow: -11px -15px 40px 1px rgba(252, 101, 101, 0.753);
  background-color: #fcf7f6;
`;

export default { ButtonEnviar, ButtonLimpar };
