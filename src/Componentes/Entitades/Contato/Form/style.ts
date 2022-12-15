import { Input as InputAnt, Form as FormAnt } from 'antd';
import styled from 'styled-components';

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 10px 0px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 600px;
`;

export const Input = styled(InputAnt)`
  width: 400px;
  margin-left: 10px;
`;

export const Form = styled(FormAnt)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
