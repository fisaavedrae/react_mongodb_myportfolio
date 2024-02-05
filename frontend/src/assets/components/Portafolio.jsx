import { useEffect, useState, useContext } from "react"
//import filePortafolio from '../json/portafolio.json'
import CardPortafolio from './CardPortafolio'
import { MyContext } from './context/MyContext'



const Portafolio = props => {

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "portafolio"

    const [portafolio, setPortafolio] = useState([])
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setPortafolio(data)
    }

    useEffect(() => {
        getData()
    }, [portafolio])
    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>portafolio</h2>
                <p>Algunos de mis desarrollos.</p>
            </div>
            <div className="derecha">
                <div className="layoutPortafolio">
                    {portafolio.map((item, index) => <CardPortafolio key={index} imagen={item.imagen} title={item.title} descripcion={item.descripcion} live-app={item.liveapp} />)}

                </div>
            </div>
        </div>
    )
}



export default Portafolio