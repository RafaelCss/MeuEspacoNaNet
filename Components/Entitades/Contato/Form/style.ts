import { Input } from "antd";
import styled from "styled-components";


export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  background-color: gray;
  justify-content: center;
  align-items: center;
  margin: 24px 24px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.2);
`

export const InputForm = styled(Input)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 24px 24px;
width: 100%;
height: 30px;
`

export const LabelForm = styled.label`
display: flex;
margin: 5px ;
width: 100%;
`


