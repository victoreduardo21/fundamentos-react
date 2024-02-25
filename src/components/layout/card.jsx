import React from 'react';
import './card.css'

export default function card(props) {

    const style = {
        background: props.color,
        borderColor: props.color
    }

    return (
        <div className="card" style={style}>
            <div className="title">{props.titulo}</div>      
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}