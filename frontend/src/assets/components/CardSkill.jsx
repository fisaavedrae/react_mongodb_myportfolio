import React from 'react'

const CardSkill = ({ porcentaje, titulo }) => {
    return (
        <div className="cardSkill">
            <div className="bloqueSkills">
                <div className="porcentajeSkill">{porcentaje}</div>
                <div className="tituloSkill">{titulo}</div>
            </div>
            <div className="barraProgreso">
                <div className="progeso" style={{ width: porcentaje }}></div>
            </div>
        </div>
    )
}


export default CardSkill