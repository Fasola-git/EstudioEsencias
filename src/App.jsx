import { HashRouter, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Home from './components/Home'
import Header from './components/Header'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros'
import Experiencias from './components/Experiencias'
import Footer from './components/Footer'
import Servicios from './components/Servicios'

function App() {
  
  return (
    <>
        <HashRouter>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={
            <>
              <Home/>
              <Servicios/>
              <Experiencias/>
              <Contacto/>
            </>
            }/>
            <Route exact path="/Nosotros" element={<Nosotros/>}/>
          </Routes>
        <Footer/>
        </HashRouter>
    </>
  )
}

export default App
