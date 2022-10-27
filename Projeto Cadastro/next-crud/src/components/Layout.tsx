import React from "react";
import Titulo from "./Titulo";

//para saber oque passar para o componente 
interface LayoutProps {
    titulo: string // se nao for obrigatorio basta colocar um ? antes dos dois pontos
    children: any
}

export default function Layout(props) {
  return (
    <div
      className={`
        flex flex-col w-2/3
        bg-white text-gray-700 rounded-md`}
    >
        <Titulo>{props.titulo}</Titulo>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  );
}
