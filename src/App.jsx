import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route exact path="/EstudioEsencias/" element={
            <>
              <Home/>
              <Servicios/>
              <Experiencias/>
              <Contacto/>
            </>
            }/>
            <Route exact path="/EstudioEsencias/Nosotros" element={<Nosotros/>}/>
          </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
