import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Hamb({ onLinkClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (path, targetId) => {
    toggleClass();
    onLinkClick(path, targetId);
  };
  
  const toggleClass = () => {
    setIsActive(!isActive);
    // Añadir o quitar una clase al body para manejar el scroll
    const hambicono = document.querySelector('.HambIcon');
    const hambsec = document.querySelector('.Hamb');
    hambicono.classList.toggle('Activo', !isActive);
    hambsec.classList.toggle('Activo', !isActive);
    const headElement = document.querySelector('.MobCont');
    const head = document.querySelector('.Head');
    if (headElement) {
      headElement.style.height = !isActive ? '50dvh' : '8dvh';
      headElement.style.overflow = !isActive ? 'visible' : 'hidden';
    }
    if (head) {
      head.style.height = !isActive ? '50dvh' : '8dvh';
    }
  };

  // Limpiar la clase al desmontar el componente
  useEffect(() => {
    return () => {
      document.body.classList.remove('Activo');
      const headElement = document.querySelector('.MobCont');
      const head = document.querySelector('.Head');
      if (headElement) {
        headElement.style.height = 'hidden'; // Restablecer la altura inicial
        headElement.style.height = '8dvh';
      }
      if (head) {
        head.style.height = '8dvh';
      }
    };
  }, []);

  return (
    <>
      <div className='MobCont'>
        <div className='MobNav'>
          <div className='MobIcon'>
              <Link to={"/"} className="Logo" onClick={() => handleLinkClick('/', 'Home')}>
                  <img src="/EstudioEsencias/img/Logo.svg" alt="Logo" />
              </Link>
          </div>
          <div className='HambIcon' onClick={toggleClass}>
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
          </div>
        </div>
        <div className="Top">
            <nav>
                <Link to="/" onClick={() => handleLinkClick('/', 'Servicios')}>
                    <div className="Animacion"></div>
                    <div className="TextoNav">
                        <p>Servicios</p>
                    </div>
                </Link>
                <Link to="/Nosotros" onClick={() => handleLinkClick('/Nosotros', 'Nosotros')}>
                    <div className="Animacion"></div>
                    <div className="TextoNav">
                        <p>Nosotros</p>
                    </div>
                </Link>
                <Link to="/" onClick={() => handleLinkClick('/', 'Experiencias')}>
                    <div className="Animacion"></div>
                    <div className="TextoNav">
                        <p>Experiencias</p>
                    </div>
                </Link>
                <Link to="/" onClick={() => handleLinkClick('/', 'Contacto')}>
                    <div className="Animacion"></div>
                    <div className="TextoNav">
                        <p>Contacto</p>
                    </div>
                </Link>
            </nav>
        </div>
        <div className="Bottom">
            <div className="RedesContainer">
                <div className="Redes">
                    <a className="fa-brands fa-instagram"href="https://www.instagram.com/estudio_esencias/"></a>
                    <a className="fa-brands fa-youtube" href="https://www.youtube.com/@EsenciasEstudio"></a>
                    <a className="fa-brands fa-facebook" href="https://www.facebook.com/EstudioEsenciasmac/"></a>
                </div>
                <p>+54 381 640 3170</p>
            </div>
        </div>
      </div>
    </>
  );
}
