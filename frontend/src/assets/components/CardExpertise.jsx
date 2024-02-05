import { useContext } from "react"
import { MyContext } from './context/MyContext'


const CardExpertise = ({ conteo, title, text }) => {

    const { urlBase, contador, setcontador } = useContext(MyContext)

    return (
        <div className="cardExpertise">
            <div className="conteoExpertise"><i className="fa-solid fa-star"></i></div>
            <div className="bloqueExpertise">
                <h2>{title}</h2>
                <div className='texto-expertise'>{text}</div>
            </div>
        </div>
    )
}


export default CardExpertise