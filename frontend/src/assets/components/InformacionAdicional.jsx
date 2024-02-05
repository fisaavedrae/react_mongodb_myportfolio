import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
//import fileInformacionAdicional from '../json/informacionAdicional.json'

const InformacionAdicional = props => {

    const [informacionAdicional, setInformacionAdicional] = useState([])

    const { urlBase } = useContext(MyContext)
    const uri = urlBase + "informacionAdicional"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setInformacionAdicional(data)
    }

    useEffect(() => {
        getData()
    }, [informacionAdicional])
    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>INFORMACIÓN ADICIONAL</h2>
                <p>Tal vez sea interesante.</p>
            </div>
            <div className="derecha">
                <div className="layoutInformacionAdicional">

                    {informacionAdicional.map((item, index) =>
                        <div className="listado-informacion-adicional" key={index}>
                            <div className="bullet"><i className="fa-solid fa-circle"></i></div>
                            <div className="texto-informacion-adicional">{item.title}</div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}


export default InformacionAdicional