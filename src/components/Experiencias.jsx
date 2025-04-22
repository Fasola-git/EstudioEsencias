import '../sass/Experiencias.scss'
import { useEffect } from 'react';


export default function Experiencias() {

    const handleMouseEnter = (event) => {
        const id = event.target.id;
        if (id === 'v1') {
            document.getElementById('v1').style.transform = 'scale(1.2)';
            document.getElementById('v2').style.transform = 'translateX(5%)';
        } else if (id === 'v2') {
            document.getElementById('v2').style.transform = 'scale(1.2)';
            document.getElementById('v1').style.transform = 'translateX(-5%)';
        } else if (id === 'v3') {
            document.getElementById('v3').style.transform = 'scale(1.2)';
            document.getElementById('v1').style.transform = 'translateY(-10%)';
            document.getElementById('v2').style.transform = 'translateY(-10%)';
            document.getElementById('v4').style.transform = 'scale(0.85) translateX(10%)';
            document.getElementById('v5').style.transform = 'translateY(10%)';
            document.getElementById('v6').style.transform = 'translateY(10%)';
        } else if (id === 'v4') {
            document.getElementById('v4').style.transform = 'scale(1.2)';
            document.getElementById('v5').style.transform = 'translateY(10%)';
            document.getElementById('v2').style.transform = 'translateY(-10%)';
            document.getElementById('v3').style.transform = 'scale(0.85) translateX(-10%)';
            document.getElementById('v6').style.transform = 'translateY(10%)';
        } else if (id === 'v5') {
            document.getElementById('v5').style.transform = 'scale(1.2)';
            document.getElementById('v6').style.transform = 'translateX(5%)';
        } else if (id === 'v6') {
            document.getElementById('v6').style.transform = 'scale(1.2)';
            document.getElementById('v5').style.transform = 'translateX(-5%)';
        }
    };

    const handleMouseLeave = () => {
        const videos = document.querySelectorAll('.Video, .VideoV');
        videos.forEach(video => {
            video.style.transform = 'none';
        });
    };

    useEffect(() => {
        const videos = document.querySelectorAll('.Video, .VideoV');
        
        videos.forEach(video => {
            video.addEventListener('mouseenter', handleMouseEnter);
            video.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            videos.forEach(video => {
                video.removeEventListener('mouseenter', handleMouseEnter);
                video.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);
    
    return(
        <>
        <section className='Experiencias' id="Experiencias" >
            <div className='Titulo'>
                <h2>EXPERIENCIAS</h2>
                <h3 className='Subtitulo'>El arte de <span>capturar</span> momentos musicales.</h3>
            </div>
            <img src="/EstudioEsencias/img/Dot-pulse.png" className='DotPulse' id='p1' alt="PulseDot" />
            <img src="/EstudioEsencias/img/Dot-pulse.png" className='DotPulse' id='p2' alt="PulseDot" />
            <div className="ExperienciasContainer">
                <div className="Artistas">
                    <div>
                        <h3>Nuestros artistas</h3>
                    </div>
                    <div className='VideoContainer'>
                    <iframe src="https://www.youtube-nocookie.com/embed/sMrGnlGnQ80?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v1' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube-nocookie.com/embed/p-20qiXG5b8?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v2' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube-nocookie.com/embed/vZFmOdDOYQI?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v3' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube-nocookie.com/embed/-n-H6Tf5Jto?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v4' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube-nocookie.com/embed/klT6Bk-PHZ0?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v5' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://www.youtube-nocookie.com/embed/Jeqqhp3O054?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1" className='Video' id='v6' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                <div className='Divider'></div>
                </div>
                <div className="Estudio">
                    <div className='EstudioContainer'>
                        <h3>Nuestro estudio</h3>
                        <img src="/EstudioEsencias/img/Estudio-1.jpg" className='EstudioImg' alt="Estudio" />
                    </div>
                    <div className='SalasContainer'>
                        <h3>Salas</h3>
                        <div className='SalasImgCont'>
                            <img src="/EstudioEsencias/img/Salas-1.jpg" className='SalasImg' alt="salas1" />
                            <img src="/EstudioEsencias/img/Salas-2.jpg" className='SalasImg' alt="salas2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}