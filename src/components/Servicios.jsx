import '../sass/Servicios.scss'
import Slider from './Slider'

export default function Servicios(){

    return(
        <>
        <section className="Servicios" id="Servicios" >
            <div className='Titulo'>
                <h2>SERVICIOS</h2>
                <h3 className='Subtitulo'><span>Conocé</span> todo lo que brindamos.</h3>
            </div>
            <div className='ContentContainer'>
                <div className='Background'>
                    <img src="../../public/img/Linea-Servicios.png" alt="fondoservicios" />
                </div>
                <div className='CaruselContainer'>
                    <div className='Divider'></div>
                    <Slider className='SliderMob'></Slider>
                    <div className='Carusel'>
                        <div className='CaruselItemExtendido' id='c1'>
                            <div className='CaruselItem'>
                                <div className='CaruselContent'>
                                    <img src="../../public/img/ProduccionMusical.jpeg" alt="produccionmusical" />
                                    <div className='CaruselTexto'>
                                        <div className='DivTexto'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"> <g weight="regular"><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path></g></svg>
                                            <div>
                                                <p>PRODUCCION</p>
                                                <p>MUSICAL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                            <div className='DetallesContainer' id='1'>
                                <div className='Detalle detalle-1'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Músicos capacitados</p>
                                        <p>para el desarrollo de tu</p>
                                        <p>música</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-2'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Adaptamos la canción</p>
                                        <p>que te gusta a tu estilo</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-3'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Música original para tus</p>
                                        <p>videos</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-4'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Creacion de audiovisuales</p>
                                        <p>(Reel's - VideoCips)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='CaruselItemExtendido' id='c2'>
                            <div className='CaruselItem'>
                                <div className='CaruselContent'>
                                    <img src="../../public/img/REC.jpeg" alt="rec" />
                                    <div className='CaruselTexto'>
                                        <div className='DivTexto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" ><g color="rgb(255, 255, 255)" weight="regular"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-160a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Z"></path></g></svg>
                                            <div>
                                                <p>REC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='DetallesContainer' id='2'>
                                <div className='Detalle detalle-1'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Composicion de música</p>
                                        <p>y letra</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-2'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Spot publicitario</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-3'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Radio y TV (Contenido </p>
                                        <p>para redes sociales)</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-4'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Instrumentos reales</p>
                                        <p>y virtuales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='CaruselItemExtendido' id='c3'>
                            <div className='CaruselItem'>
                                <div className='CaruselContent'>
                                    <img src="../../public/img/RegistroYGestion.jpeg" alt="registroygestion" />
                                    <div className='CaruselTexto'>
                                        <div className='DivTexto'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)"><g color="rgb(255, 255, 255)" weight="regular"><path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"></path></g></svg>                                            
                                            <div>
                                                <p>REGISTRO Y </p>
                                                <p>GESTION DE</p>
                                                <p>OBRAS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='DetallesContainer' id='3'>
                                <div className='Detalle detalle-1'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>SADAIC</p>
                                        <p className='Subtexto'>Registro de letra y música</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-2'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>CAPIF</p>
                                        <p className='Subtexto'>Registro de MASTER</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-3'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>AADI</p>
                                        <p className='Subtexto'>Registro de interpretes en</p>
                                        <p className='Subtexto'>grabación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='CaruselItemExtendido' id='c4'>
                            <div className='CaruselItem'>
                                <div className='CaruselContent'>
                                    <img src="../../public/img/DistribucionDigital.jpeg" alt="distribuciondigital" />
                                    <div className='CaruselTexto'>
                                        <div className='DivTexto'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"> <g weight="regular"><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path></g></svg>
                                            <div>
                                                <p>DISTRIBUCION </p>
                                                <p>DIGITAL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='DetallesContainer' id='4'>
                                <div className='Detalle detalle-1'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <p>Tu música en todas</p>
                                        <p>las plataformas</p>
                                        <p>musicales</p>
                                    </div>
                                </div>
                                <div className='Detalle detalle-2'>
                                    <div className='Punto'></div>
                                    <div className='Texto'>
                                        <div className='DivIconos'>
                                            <i id='i1' className="fa-brands fa-spotify"></i>
                                            <i id='i2' className="fa-brands fa-deezer"></i>
                                            <i id='i3' className="fa-brands fa-youtube"></i>
                                            <i id='i4' className="fa-brands fa-amazon"></i>
                                            <i id='i5' className="fa-brands fa-instagram"></i>
                                            <i id='i6' className="fa-brands fa-facebook"></i>
                                            <i id='i7' className="fa-brands fa-tiktok"></i>
                                            <i id='i8' className="fa-brands fa-apple"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Divider'></div>
                </div>
            </div>
        </section>
        </>
    )
}