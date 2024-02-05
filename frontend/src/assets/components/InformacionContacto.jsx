import React from 'react'

const InformacionContacto = ({ title, text }) => {
    return (
        <div className='informacionContacto'>
            <div className="cabecera">{title}</div>
            <div className="texto">{text}</div>
        </div>
    )
}


export default InformacionContacto