import React from "react";

export default function Aleatorio(props) {
    const min = props.min
    const max = props.max

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>valor aliatorio</h2>
            <p><strong>valor minimo</strong>{props.min}</p>
            <p><strong>valor maximo</strong>{props.max}</p>
            <p><strong>Valor escolhido:</strong>{aleatorio}</p>
            <strong>{aleatorio}</strong>
        </div>
    )

}