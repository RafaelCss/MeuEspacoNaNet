import React,{useState, useEffect, createContext} from "react";
import styled from 'styled-components'


export const Header = styled.header` 
display: flex;
background-color: #333;
width: 100%;
height: 50px;
align-items: center;
justify-content: space-between;
`


export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div> 
      <Header>
        <h1>Home</h1>
      </Header>
      <h1>Olá Mundo </h1>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}
