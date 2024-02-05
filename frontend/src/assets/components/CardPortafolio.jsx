import React from 'react'
const CardPortafolio = props => {

    return (
        <div className='card-portafolio'>
            <div className="div-imagen-portafolio">
                <a href="`${props.liveapp}`" className="column col-xs-6" id="caption">
                    <span className="text">
                        <h1>{props.title}</h1>
                        <p>{props.descripcion}</p>
                    </span>
                    <img src={props.imagen} alt={props.title} />
                </a>
            </div>
        </div >
    )
}

export default CardPortafolio