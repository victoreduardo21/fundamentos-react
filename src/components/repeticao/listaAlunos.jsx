import React from "react";
import alunos from '../../data/alunos.js'

export default function lista(props) {

    const lis = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );

    });

    return (
        <div>
            <ul style={{ listStyle: "nome" }}>{lis}</ul>
        </div>
    )
}