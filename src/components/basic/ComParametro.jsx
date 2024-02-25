import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? ' Aprovado' : ' de recuperação'
    return (

        <div>
            <h2>{props.titulo}</h2>
            <h3>
                <strong>{props.Aluno}</strong>
                tem nota
                <strong>{props.nota}</strong>
                ele esta 
                <strong>{status}</strong>!
            </h3>
        </div>


    )
};