import React from 'react';

export default function ParOuImpar(props) {
    const par = props.numero % 2 === 0
    return (
        <div>
            {par ?
                <span>Par</span> :
                <span>Impar</span>
            }
        </div>
    )
}