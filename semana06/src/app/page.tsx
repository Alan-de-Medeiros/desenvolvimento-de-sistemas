'use client'


import { useState } from "react";
import "./home.css";

export default function Home() {
  //let contador = 0;
  const [contador, setContador] = useState<number>(0);
  

  function incrementar() {
    setContador(contador + 1);
  }

  function resetar() {
    setContador(0)
  }

  function decrementar() {
    setContador(contador - 1);
  }

  
  

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>INCREMENTAR</button>
      <button onClick={resetar}>RESETAR</button>
      <button onClick={decrementar}>DECREMENTAR</button>
    </div>
  );
}
