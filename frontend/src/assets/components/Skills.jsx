import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
import CardSkill from './CardSkill'
//import Skill from '../json/skills.json'

const Skills = props => {

    const [skills, setSkills] = useState([])

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "skills"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setSkills(data)
    }

    useEffect(() => {
        getData()
    }, [skills])

    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>SKILLS</h2>
                <p>Un poco técnico.</p>
            </div>
            <div className="derecha">
                <div className="layoutSkill">
                    {skills.map((item, index) => <CardSkill key={index} porcentaje={item.porcentaje} titulo={item.nombre} />)}
                </div>
            </div>
        </div>
    )
}


export default Skills