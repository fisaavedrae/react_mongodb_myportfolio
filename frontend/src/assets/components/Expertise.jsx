import { useEffect, useState, useContext } from "react"
import { MyContext } from './context/MyContext'
import CardExpertise from './CardExpertise'
//import Expertises from '../json/expertise.json'

const Expertise = props => {

    const [expertise, setExpertise] = useState([])

    const { urlBase, contador, setcontador } = useContext(MyContext)
    const uri = urlBase + "expertise"
    const getData = async () => {

        const res = await fetch(uri)
        const data = await res.json()
        setExpertise(data)
    }

    useEffect(() => {
        getData()
    }, [expertise])

    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>EXPERTISE</h2>
                <p>Batman estaría celoso.</p>
            </div>
            <div className="derecha">
                <div className="layoutExpertise">
                    {expertise.map((item, index) =>
                        <CardExpertise key={index} conteo={contador} title={item.titulo} text={item.texto} />
                    )}
                </div>
            </div>
        </div>
    )
}


export default Expertise