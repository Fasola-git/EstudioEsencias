import '../sass/Home.scss'

export default function Home(){

    return(
        <>
        <section className="Home" id="Home" >
            <div className='Container1'>
                <img className="Logo" src="../../public/img/Logo.svg" alt="logo" />
                <div className='TituloContainer'>
                    <div className="light"></div>
                    <h1>Estudio</h1>
                    <h1>Esencias</h1>
                </div>
            </div>
            <div className='Container2'>
                <h3 className='Subtitulo'><span>Lleva</span> tu música al siguiente nivel.</h3>
                <a className='Boton' href='https://www.youtube.com/@EsenciasEstudio' target="_blank">
                    <div className='play'><i className="fa-solid fa-play fa-lg"/></div>
                    <p>Ver canal</p>
                </a>
            </div>
            <div className='background'>
                <video className="video-background" src="../../public/img/Banner-Video.mov" autoPlay muted loop disablePictureInPicture type="video/mp4"/>
            </div>
        </section>
        </>
    )
}