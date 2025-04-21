import './App.css'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Techs from './components/Techs'
import { Lenguage_tools, Web } from './db/logosData'

function App() {

  return (
    <>
      <HeroSection/>
      <img src='src/assets/Logos/arrow_down.webp' 
          className='place-self-center -translate-y-15 animate-bounce size-10'/>
      
      <Projects/>

      <div id='Techs' className='mb-30 scroll-m-20'>
          <h1 className="text-center font-bold text-3xl mb-4">Tecnologías</h1>
          <div className="place-self-center gap-x-10 gap-y-5
              grid grid-cols-1">
              <Techs
              logos={Web}
              name='Front-End y Back-End'/>
              <Techs
              logos={Lenguage_tools}
              name='Lenguajes y herramientas'/>
          </div>
      </div>
    </>
  )
}

export default App
