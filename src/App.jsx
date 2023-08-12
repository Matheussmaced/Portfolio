import Header from './components/Header'
import Presentation from './components/Presentation'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Servicos from './components/Servicos'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

import {useState} from 'react'

function App() {
  const [bodyHidden, setBodyHidden] = useState('inicial')

  return (
    <>
      <Header setBodyHidden={setBodyHidden} bodyHidden={bodyHidden} />
      <div className={`body ${bodyHidden}`}>
        <Presentation />
        <SobreMim />
        <Projetos />
        <Servicos />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
