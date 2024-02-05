import React from 'react'

const CardEducacion = props => {
    return (
        <div className='cardEducacion'>
            <div className="primer-bloque-educacion">
                <div className="bullet"><i className="fa-solid fa-circle"></i></div>
                <div className="linea-educacion"></div>
            </div>
            <div className="segundo-bloque-educacion">
                <div className="fecha-educacion">{props.fecha}</div>
                <div className="institucion-educacion">{props.institucion}</div>
                <div className="carrera-educacion">{props.carrera}</div>
                <div className="ubicacion-educacion">{props.ubicacion}</div>
            </div>
            <div className="tercer-bloque-educacion">
                <div className="texto-educacion">{props.texto}</div>
            </div>
        </div>
    )
}

export default CardEducacion