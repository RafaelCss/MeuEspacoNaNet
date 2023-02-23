import { Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

const ButtonEnviar = styled(ButtonAntd)`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  width: 25rem;
  height: 5vh;
  color: #000000ef;
  border: none;
  -webkit-box-shadow: -11px -15px 40px 1px rgba(255, 255, 255, 0.068);
  -moz-box-shadow: -11px -15px 40px 1px rgba(80, 78, 77, 0.021);
  box-shadow: -11px -15px 40px 1px rgba(94, 92, 92, 0.014);
  background-color: #fbfdfb;
`;

const ButtonLimpar = styled(ButtonAntd)`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  width: 25rem;
  height: 5vh;
  color: #050404;
  border: none;
  -webkit-box-shadow: -11px -15px 40px 1px rgba(255, 255, 255, 0.068);
  -moz-box-shadow: -11px -15px 40px 1px rgba(80, 78, 77, 0.021);
  box-shadow: -11px -15px 40px 1px rgba(94, 92, 92, 0.014);
  background-color: #fcf7f6;
`;

export default { ButtonEnviar, ButtonLimpar };
