import '../sass/Nosotros.scss'

export default function Nosotros(){

    return(
        <section className="Nosotros" id="Nosotros">
            <div className='DivNosotros'>
                <div className='Titulo'>
                    <h2>NOSOTROS</h2>
                    <h3 className='Subtitulo'><span>Descubre</span> nuestra historia.</h3>
                </div>
                <div className='TextoNosotros'>
                    <p>Estudio Esencias está conformado por un equipo de músicos y técnicos profesionales especializados en cada área. Tiene sus inicios por el año 2011 bajo la dirección del productor musical Alejandro Campos. Desde entonces se fue conformando hasta la fecha un gran equipo dedicado a trabajar en conjunto por la carrera de los artistas, tanto para los que están iniciándose como con aquellos a los que el público ya consagró.</p>
                    <p>Contando con gran experiencia, hoy en día se consolida como uno de los estudios más reconocidos de Tucumán. También cuenta con producciones para artistas del exterior (España, Chile, Perú, Costa Rica…) debido a que es buscado por su calidad de sonido y atención personalizada en cada proyecto haciéndolos propios para acompañar con empatía los sueños de cada artista.</p>
                    <p>El equipo está compuesto por productores, ingenieros de sonido, músicos, arreglistas y diseñadores de sonido, quienes trabajan juntos para crear grabaciones que reflejen la visión artística de cada cliente. Además, el estudio cuenta con una amplia variedad de equipos de ultima generación y una acústica impecable para garantizar un sonido de alta calidad.</p>
                </div>
                <img src="../../public/img/Guitarra-blanca.png" className='Guitarra' alt="guitarrablanca" />
            </div>
            <div className='DivRoomControls'>
                <div className='Titulo'>
                    <h2>ROOMS/CONTROL</h2>
                    <h3 className='Subtitulo'>Donde se <span>hace</span> la magia.</h3>
                </div>
                <div className='ImgRoomControl'>
                    <img src="../../public/img/Rooms-control.jpg" className='Room' alt="roomscontrol" />
                    <img src="../../public/img/Teclado.png" className='Teclado' alt="teclado" />
                    <img src="../../public/img/auriculares-negros.png" className='AuricularesNeg' alt="auricularesnegros" />
                </div>
                <img src="../../public/img/Dot-pulse.png" className='DotPulse' alt="PulseDot" />
            </div>
            <div className='DivControlRec'>
                <img src="../../public/img/Dot-pulse.png" className='DotPulse' alt="PulseDot" />
                <div className='Titulo'>
                    <h2>CONTROL REC</h2>
                    <h3 className='Subtitulo'>Sala de <span>grabación</span> / Check <span>Video</span></h3>
                </div>
                <div className='ImgControlRec'>
                    <img src="../../public/img/Control-1.jpg" alt="control1" />
                    <img src="../../public/img/Control-2.jpg" alt="control2" />
                </div>
            </div>
        </section>
    )
}