import { useState, useEffect } from 'react';
import '../sass/Contacto.scss';

export default function Contacto() {
    // Estado para manejar el video visible
    const [visibleVideo, setVisibleVideo] = useState(null);
    const [activeVideo, setActiveVideo] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

      // Define los límites máximos de movimiento
      const maxDiscoMove = screenWidth * 0.86; // Ajusta este valor según la distancia deseada
      const maxAuricularesMove = screenWidth * 0.99; // Ajusta este valor según la distancia deseada
  
      // Calcula el movimiento de las imágenes en función del scroll
      const discoTransform = `translateX(${Math.max(-scrollY / 2, -maxDiscoMove)}px)`;
      const auricularesTransform = `translateX(${Math.min(scrollY / 2, maxAuricularesMove)}px)`;

    useEffect(() => {
        // Configurar un temporizador para aplicar la clase 'active' después de 0.3 segundos
        const timer = setTimeout(() => {
            setActiveVideo(visibleVideo);
        }, 240);

        // Limpiar el temporizador si se cambia el estado antes de que se complete
        return () => clearTimeout(timer);
    }, [visibleVideo]);

    // Limpiar el estado 'activeVideo' si no hay video visible
    useEffect(() => {
        if (visibleVideo === null) {
            setActiveVideo(null);
        }
    }, [visibleVideo]);

    return(
        <>
            <section className="Contacto" id="Contacto" >
                <div className='DivForm'>
                    <div className='BackgroundForm'>
                        <img src="../../public/img/Linea-Contacto.png" alt="fondocontacto" />
                    </div>
                    <div className='Titulo'>
                        <h2>CONTACTO</h2>
                        <h3 className='Subtitulo'>Vamos a <span>comunicarnos.</span></h3>
                    </div>
                    <div className='FormTextoContainer'>
                        <div className='ContactoTextoCont'>
                            <div className='TextoCont'>
                                <h3>Estamos abiertos a consultas o sugerencias:</h3>
                                <div className='ContactoTextoItem'>
                                    <i className="fa-regular fa-envelope ContactoIcono"></i>
                                    <div className='ContactoTexto'>
                                        <p>info@estudioesencias.com.ar</p>
                                    </div>
                                </div>
                                <div className='ContactoTextoItem'>
                                    <i className="fa-brands fa-whatsapp ContactoIcono"></i>
                                    <div className='ContactoTexto'>
                                        <p>+54 381 640 3170</p>
                                    </div>
                                </div>
                                <div className='ContactoTextoItem'>
                                    <i className="fa-solid fa-phone ContactoIcono"></i>
                                    <div className='ContactoTexto'>
                                        <p>+54 142 31525</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ContactoForm'>
                            <form action="https://formsubmit.co/info@estudioesencias.com.ar" method="POST">
                                <input type="text" name='name' className='formelem' placeholder='Tu nombre completo' required />
                                <input type="email" name='email' className='formelem' placeholder='Tu correo electrónico' required />
                                <textarea name="comments" id="message" className='formelem textarea' placeholder='Escribe tu consulta' required></textarea>
                                <div className='ButtonDiv'>                                
                                    <button className="animated-button" type="submit" value={"Enviar"}>
                                        <span>Enviar mensaje<i className="fa-solid fa-arrow-right fa-sm"></i></span>
                                        <span></span>
                                    </button>
                                </div>

                                <input type="hidden" name='_captcha' value={false} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='DivRedes'>
                    <h3>Nuestras redes sociales</h3>
                    <div className='BackgroundRedes' style={{ transform: discoTransform }}>
                        <img src="../../public/img/disco-vinilo.png" alt="discovinilo" />
                    </div>
                    <div className='RedesCont'>
                        <div className='RedesDiscosCont'>
                            <a className='DiscoRed Yt'
                                href='https://www.youtube.com/@EsenciasEstudio'
                                onMouseEnter={() => setVisibleVideo('v1')}
                                onMouseLeave={() => {
                                    // Establecer activeVideo a null de inmediato
                                    setActiveVideo(null);
                                    
                                    // Configurar un temporizador para establecer visibleVideo a null después de 0.3 segundos
                                    setTimeout(() => {
                                        setVisibleVideo(null);
                                    }, 10);
                                }}>
                                <i className="fa-brands fa-youtube"></i>
                                <div className='DiscoCont'>
                                    <img src="../../public/img/disco-vinilo.png" alt="" />
                                </div>
                            </a>
                            <a className='DiscoRed Ig'
                                href='https://www.instagram.com/estudio_esencias/'
                                onMouseEnter={() => setVisibleVideo('v2')}
                                onMouseLeave={() => {
                                    // Establecer activeVideo a null de inmediato
                                    setActiveVideo(null);
                                    
                                    // Configurar un temporizador para establecer visibleVideo a null después de 0.3 segundos
                                    setTimeout(() => {
                                        setVisibleVideo(null);
                                    }, 10);
                                }}>
                                <i className="fa-brands fa-square-instagram"></i>
                                <div className='DiscoCont'>
                                    <img src="../../public/img/disco-vinilo.png" alt="" />
                                </div>
                            </a>
                            <a className='DiscoRed Fb'
                                href='https://www.facebook.com/EstudioEsenciasmac/'
                                onMouseEnter={() => setVisibleVideo('v3')}
                                onMouseLeave={() => {
                                    // Establecer activeVideo a null de inmediato
                                    setActiveVideo(null);
                                    
                                    // Configurar un temporizador para establecer visibleVideo a null después de 0.3 segundos
                                    setTimeout(() => {
                                        setVisibleVideo(null);
                                    }, 10);
                                }}>
                                <i className="fa-brands fa-square-facebook"></i>
                                <div className='DiscoCont'>
                                    <img src="../../public/img/disco-vinilo.png" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className='ReproductorCont'>
                            <div className='RepCont'>
                                <div className='Reproductor'>
                                    <div className='Miniatura'>
                                        <img src="../../public/img/Logo.svg" alt="logoestudio" className={`LogoEstudio ${activeVideo == null ? 'active' : ''}`} style={{ opacity: visibleVideo !== null ? 0 : 1}} />
                                        <div className={`VideoMini1 ${activeVideo === 'v1' ? 'active' : ''}`} style={{ display: visibleVideo === 'v1' ? 'block' : 'none'}}>
                                            <iframe src="https://www.youtube-nocookie.com/embed/sMrGnlGnQ80?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                        <div className={`VideoMini2 ${activeVideo === 'v2' ? 'active' : ''}`} style={{ display: visibleVideo === 'v2' ? 'block' : 'none'}}>
                                            <iframe src="https://www.youtube-nocookie.com/embed/p-20qiXG5b8?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                        <div className={ `VideoMini3 ${activeVideo === 'v3' ? 'active' : ''}`} style={{ display: visibleVideo === 'v3' ? 'block' : 'none'}}>
                                            <iframe src="https://www.youtube-nocookie.com/embed/vZFmOdDOYQI?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className='NombreMarca'>
                                        <p>@EstudioEsencias</p>
                                    </div>
                                    <div className='Barra'></div>
                                    <div className='Controles'>
                                        <i className="fa-solid fa-backward"></i>
                                        <i className="fa-solid fa-circle-pause"/>
                                        <i className="fa-solid fa-forward"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='DivUbicacion'> 
                    <div className='BackgroundUbi' style={{ transform: auricularesTransform }}>
                        <img src="../../public/img/auriculares-blancos.png" alt="Auriculares Blancos" />
                    </div>
                    <div className='MapCont'>
                        <div className='TextoCont'>
                            <h3>Nuestra ubicación</h3>
                            <div className='DivTexto'>
                                <i className="fa-solid fa-location-dot IconoUbi"></i>
                                <p>Bolivar 2775, San Miguel de Tucumán</p>
                            </div>
                        </div>
                        <div className='Maps'>
                            <iframe src="https://maps.google.com/maps?q=-26.83317519670051,-65.24245474110441&amp;z=17&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}