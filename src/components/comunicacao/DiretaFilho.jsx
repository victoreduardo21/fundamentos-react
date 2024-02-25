import React from "react";

export default function DiretaPai(props){

 return (
    <div>
        <span>{props.nome}</span>
        <span><strong>{props.idade}</strong></span>
        <span>{props.nerd ? ' verdadeiro' : ' falso'}</span>

    </div>

 )
    
}