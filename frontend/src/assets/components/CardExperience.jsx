import React from 'react'

const CardExperience = props => {
    return (
        <div className='cardExperience'>
            <div className="primer-bloque-experience">
                <div className="bullet"><i className="fa-solid fa-circle"></i></div>
                <div className="linea-experience"></div>
            </div>
            <div className="segundo-bloque-experience">
                <div className="fecha-experience">{props.fecha}</div>
                <div className="empresa-experience">{props.empresa}</div>
                <div className="cargo-experience">{props.cargo}</div>
                <div className="ubicacion-experience">{props.ubicacion}</div>
            </div>
            <div className="tercer-bloque-experience">
                <div className="texto-experience">
                    <ul>
                        {props.texto.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CardExperience