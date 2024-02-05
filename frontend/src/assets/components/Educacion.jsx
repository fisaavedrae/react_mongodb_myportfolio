import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
//import fileEducacion from '../json/education.json'
import CardEducacion from './CardEducacion'

const Educacion = props => {

    const [education, setEducation] = useState([])

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "education"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setEducation(data)
    }

    useEffect(() => {
        getData()
    }, [education])
    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>educación</h2>
                <p>No soy muy bueno para el estudio, pero lo pongo empeño.</p>
            </div>
            <div className="derecha">
                <div className="layoutEducacion">
                    {education.map((item, index) => <CardEducacion key={index} fecha={item.fecha} institucion={item.institucion} carrera={item.carrera} ubicacion={item.ubicacion} texto={item.texto} />)}
                </div>
            </div>
        </div>
    )
}



export default Educacion