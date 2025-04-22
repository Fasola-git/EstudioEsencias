import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../sass/Header.scss'
import Hamb from "./Hamb";

export default function Header(){ 
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
          let offset = 75;
          if (targetId === 'Experiencias') {
            offset = 50; // Offset específico para "Experiencias"
          } else
          if (targetId === 'Home') {
            offset = 200; 
          } else
          if (targetId === 'Nosotros') {
            offset = 200; // Offset específico para "Experiencias"
          }
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
    };

    

    const handleLinkClick = (path, targetId) => {
        if (location.pathname === '/EstudioEsencias/' && path!=location.pathname) {
            // Si estamos en la principal y queremos ir a otra página
            navigate(path);
            // Agrega un pequeño retraso antes de hacer el scrollTo para asegurarte de que la página haya cambiado
            setTimeout(() => {
                handleNavigation(targetId);
            }, 100);
        }else if(location.pathname === '/EstudioEsencias/' && path===location.pathname){
            // Si estamos en la página principal, realiza el scrollTo al elemento
            handleNavigation(targetId);
        
        } else {
            // Si estamos en "nosotros", cambia de página y realiza el scrollTo a la sección correspondiente
            navigate(path);
    
            // Agrega un pequeño retraso antes de hacer el scrollTo para asegurarte de que la página haya cambiado
            setTimeout(() => {
                handleNavigation(targetId);
            }, 100);
        }
    };

    return(
        <>
            <header className='Head'>
                <div className="Hamb">
                    <Hamb/>
                    <div className="Divider"></div>
                </div>
                <div className="Header-divider">
                    <div className="Header">
                        <div className="Left">
                            <Link to={"/EstudioEsencias/"} className="Logo" onClick={() => handleLinkClick('/EstudioEsencias/', 'Home')}>
                                <img src="/EstudioEsencias/img/Logo.svg" alt="Logo" />
                            </Link>
                            <div className="RedesContainer">
                                <div className="Redes">
                                    <a className="fa-brands fa-instagram"href="https://www.instagram.com/estudio_esencias/"></a>
                                    <a className="fa-brands fa-youtube" href="https://www.youtube.com/@EsenciasEstudio"></a>
                                    <a className="fa-brands fa-facebook" href="https://www.facebook.com/EstudioEsenciasmac/"></a>
                                </div>
                                <p>+54 381 640 3170</p>
                            </div>
                        </div>
                        <div className="Right">
                            <nav>
                                <Link to="/EstudioEsencias/" onClick={() => handleLinkClick('/EstudioEsencias/', 'Servicios')}>
                                    <div className="Animacion"></div>
                                    <div className="TextoNav">
                                        <p>Servicios</p>
                                    </div>
                                </Link>
                                <Link to="/EstudioEsencias/Nosotros" onClick={() => handleLinkClick('/EstudioEsencias/Nosotros', 'Nosotros')}>
                                    <div className="Animacion"></div>
                                    <div className="TextoNav">
                                        <p>Nosotros</p>
                                    </div>
                                </Link>
                                <Link to="/EstudioEsencias/" onClick={() => handleLinkClick('/EstudioEsencias/', 'Experiencias')}>
                                    <div className="Animacion"></div>
                                    <div className="TextoNav">
                                        <p>Experiencias</p>
                                    </div>
                                </Link>
                                <Link to="/EstudioEsencias/" onClick={() => handleLinkClick('/EstudioEsencias/', 'Contacto')}>
                                    <div className="Animacion"></div>
                                    <div className="TextoNav">
                                        <p>Contacto</p>
                                    </div>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="Divider"></div>
                </div>
            </header> 
        </>
    )
}