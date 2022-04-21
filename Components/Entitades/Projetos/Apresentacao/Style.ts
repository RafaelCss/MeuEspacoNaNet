import styled from "styled-components";


export const Fundo = styled.div`
background-color: white;
display: block;
width: 100%;
height: 100%;
`


export const Tijolos= styled.div`
position: relative;
background-color:${props=> props.color};
width: ${props=> props.color};
height: 20px;

`