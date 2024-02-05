import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
import Felipe from '../images/felipe.jpeg'
import InformacionContacto from './InformacionContacto'
//import contacto from '../json/informacionContacto.json'

const Home = props => {

    const [informacionContacto, setInformacionContacto] = useState([])

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "informacionContacto"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setInformacionContacto(data)
    }

    useEffect(() => {
        getData()
    }, [informacionContacto])
    return (

        <div className="seccionOne h100">
            <div className="izquierda">
                <div className="foto"><img src={Felipe} alt="Felipe" /></div>
            </div>
            <div className="derecha">
                <div className="bloqueNombre">
                    <div className="nombre">felipe</div>
                    <div className="apellido">SAAVEDRA</div>
                </div>
                <div className="bloqueTitulo">
                    <div className="rol">Project Manager & Desarrollador</div>
                    <div className="redesSociales">
                        <div className="icono"><a href="https://www.linkedin.com/in/felipe-saavedra-escobar/"><i className="fab fa-linkedin-in"></i></a></div>
                        <div className="icono"><a href="https://github.com/fisaavedrae"><i className="fab fa-github"></i></a></div>
                    </div>
                </div>
                <div className="bloqueInformacion">
                    {informacionContacto.map((item, index) => <InformacionContacto key={index} title={item.title} text={item.text} />)}
                </div>
            </div>
        </div>


    )
}


export default Home