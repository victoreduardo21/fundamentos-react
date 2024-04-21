import React, { useState } from "react";
import './estilo.css';


export default props => {

    function gerarNumerosNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ?
            gerarNumerosNaoContido(min, max, array) : aleatorio
    }


    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])

            .sort((n1, n2,) => n1 - n2)

        return numeros
    }

     
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de numeros da sorte </label>
                    <input type="numer" value={qtde}
                    onChange={e => setQtde(+e.target.value)}/>
               
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}