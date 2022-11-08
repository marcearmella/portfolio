import video1 from '../../../media/videos/videojuegos.mp4';
import video2 from '../../../media/videos/flymate.mp4';
import imprentamodelo from '../../../media/images/imprentamodelo.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';

function Projects({handleCloseModal}){
    // const [video, setVideo] = useState(false);
    // const projectVideo = useRef();

    // useEffect(()=>{
    //     projectVideo.current.addEventListener("click", ()=>{
    //         setVideo(true);
    //     });
    // },[]);

    return (
        <div className="projects_container">
            <div className="title">
                <h1>Proyectos</h1>
            </div>
            <div className="main">
                <div className="project" tabIndex={0}>
                    <div className="image">
                        <div className="videoContainer">
                            <video src={video1}  />
                        </div>
                        <div className="iconContainer">
                            <a href='https://github.com/marcearmella/videogames-ft27b' target={"blank"}><FontAwesomeIcon icon={faGithub} size="2x" className='icon' /></a>
                        </div>
                    </div>
                    <div className="text">
                        <h2>Wiki de Videojuegos</h2>
                        <p>Sitio Web de una enciclopedia de videojuegos, creada en base a una API externa.</p>
                        <p>Back: Node, Express, PostgreSQL</p>
                        <p>Front: React, CSS modules</p>
                    </div>
                </div>
                <div className="project" tabIndex={0}>
                    <div className="image">
                        <div className="videoContainer">
                            <video src={video2} />
                        </div>
                        <div className="iconContainer">
                            <a href='https://github.com/GamalielCamey/PF-' target={"blank"}><FontAwesomeIcon icon={faGithub} size="2x" className='icon' /></a>
                        </div>
                    </div>
                    <div className="text">
                        <h2>FlyMate</h2>
                        <p>Aplicación móvil para la compra de pasajes aéreos, con manejo se sesión, reseñas y más.</p>
                        <p>Back: Node, Express, MongoDB</p>
                        <p>Front: React Native</p>
                    </div>
                </div>
                <div className="project" tabIndex={0}>
                    <div className="image">
                        <div className="videoContainer">
                            <img src={imprentamodelo} alt="imprenta modelo" />
                        </div>
                        <div className="iconContainer">
                            <a href='https://github.com/marcearmella/imprentamodelo' target={"blank"}><FontAwesomeIcon icon={faGithub} size="2x" className='icon' /></a>
                            <a href='http://www.imprentamodelo.com' target={"blank"}><FontAwesomeIcon icon={faLink} size="2x" className='icon' /></a>
                        </div>
                    </div>
                    <div className="text">
                        <h2>Imprenta Modelo</h2>
                        <p>Sitio Web de una Imprenta gráfica, usada como página promocional para la mísma.</p>
                        <p>Front: React, CSS modules</p>
                    </div>
                </div>
            </div>
            <button onClick={handleCloseModal}>
                CERRAR
            </button>
        </div>
    );
}

export default Projects;