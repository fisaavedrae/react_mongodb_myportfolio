import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MyContext } from './assets/components/context/MyContext'
import Home from './assets/components/home'
import Intro from './assets/components/Intro'
import Expertise from './assets/components/Expertise'
import Skills from './assets/components/Skills'
import Experience from './assets/components/Experience'
import Educacion from './assets/components/Educacion'
import InformacionAdicional from './assets/components/InformacionAdicional'
import Portafolio from './assets/components/Portafolio'


function App() {
  const [count, setCount] = useState(0)
  const [urlBase, setUrlBase] = useState("http://localhost:3000/")
  const [contador, setcontador] = useState(0)

  return (

    <div className="contenedor">
      <MyContext.Provider value={{ urlBase, contador, setcontador }}>
        <Home />
        <Intro />
        <Expertise />
        <Skills />
        <Experience />
        <Educacion />
        <InformacionAdicional />
        <Portafolio />
      </MyContext.Provider>
    </div >

  )
}

export default App
