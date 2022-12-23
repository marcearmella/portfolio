import video1 from '../../../media/videos/videojuegos.mp4';
import video2 from '../../../media/videos/flymate.mp4';
import imprentamodelo from '../../../media/images/imprentamodelo.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Projects({handleCloseModal}){
    
    const [t] = useTranslation('lang');

    return (
        <div className="projects_container">
            <div className="arrows-cont"></div>
            <div className="title">
                <h1>{t('projects.title')}</h1>
            </div>
            <div className="main">
                <div className="project" tabIndex={0}>
                    <div className="image">
                        <div className="videoContainer">
                            <video src={video1} />
                        </div>
                        <div className="iconContainer">
                            <a href='https://github.com/marcearmella/videogames-ft27b' target={"blank"}><FontAwesomeIcon icon={faGithub} size="2x" className='icon' /></a>
                        </div>
                    </div>
                    <div className="text">
                        <h2>{t('projects.videogame.title')}</h2>
                        <p>{t('projects.videogame.desc')}</p>
                        <p>{t('projects.videogame.back')}</p>
                        <p>{t('projects.videogame.front')}</p>
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
                        <h2>{t('projects.flymate.title')}</h2>
                        <p>{t('projects.flymate.desc')}</p>
                        <p>{t('projects.flymate.back')}</p>
                        <p>{t('projects.flymate.front')}</p>
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
                        <h2>{t('projects.modelo.title')}</h2>
                        <p>{t('projects.modelo.desc')}</p>
                        <p>{t('projects.modelo.front')}</p>
                    </div>
                </div>
            </div>
            <div className="btm-container">
                <button onClick={handleCloseModal}>
                    {t('display.closeButton')}
                </button>
            </div>
        </div>
    );
}

export default Projects;