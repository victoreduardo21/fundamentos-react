import React from "react";

export default function membro(props) {
    return (
        <div>{props.nome}<strong> {props.sobrenome}</strong></div>
    )
}