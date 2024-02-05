import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
//import fileExperience from '../json/experience.json'
import CardExperience from './CardExperience'

const Experience = props => {

    const [experience, setExperience] = useState([])

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "experience"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setExperience(data)
    }

    useEffect(() => {
        getData()
    }, [experience])

    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>EXPERIENCE</h2>
                <p>Hago de todo un poco.</p>
            </div>
            <div className="derecha">
                <div className="layoutExperience">
                    {experience.map((item, index) => <CardExperience key={index} fecha={item.fecha} empresa={item.empresa} cargo={item.cargo} ubicacion={item.ubicacion} texto={item.texto} />)}
                </div>
            </div>
        </div>
    )
}



export default Experience