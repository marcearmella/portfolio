import { useTranslation } from 'react-i18next';
import profilePicture from '../../../media/images/foto-perfil2.png';

function About({handleCloseModal}){

    const [t] = useTranslation('lang');

    return (
        <div className="about_container">
            <div className="header">
                <h1>{t('about.title')}</h1>
            </div>
            <div className="aside">
                <img className='profilePicture' src={profilePicture} alt="Foto de Marcelo Armella" />
            </div>
            <div className="main">
                <p>
                    {t('about.text')}
                </p>
            </div>
            <button onClick={handleCloseModal}>
                {t('display.closeButton')}
            </button>
        </div>
    );
}

export default About;