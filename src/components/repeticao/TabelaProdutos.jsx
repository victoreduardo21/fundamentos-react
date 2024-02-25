import React from "react";
import Produtos from '../../data/produtos.js'
import './tabela.css'
import produtos from "../../data/produtos.js";

export default function tabela(props) {

    function getLinhas() {
        return Produtos.map((Produtos, i) => {
            return (
                <tr key={produtos.id} className={i % 2 == 0? 'par': ''} >
                    <td>{Produtos.id}</td>
                    <td>{Produtos.nome}</td>
                    <td>R$ {Produtos.preço}</td>
                </tr>
            )
        })
    }


    return (
        <div className="tabela">
            <table border="1">
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}

