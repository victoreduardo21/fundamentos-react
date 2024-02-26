import React, { useState } from "react";
import './input.css'

export default props => {

    const [valor, setValor] = useState('inicial')

    function quandoMudas(e) {
        setValor(e.target.value)
    }


    return (
        <div className="input">
            <h3>{valor}</h3>
            <input value={valor}  onChange={quandoMudas}/>
        </div>

    )
}