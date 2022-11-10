import teamwork from '../../../media/images/teamwork.jpg';
import fastlearning from '../../../media/images/fastlearning.jpg';
import communicative from '../../../media/images/communicative.jpg';
import problemsolving from '../../../media/images/problemsolving.jpg';
import goaloriented from '../../../media/images/goaloriented.jpg';
import responsibility from '../../../media/images/responsibility.jpg';
import langC from '../../../media/images/langC.jpg';
import langCpp from '../../../media/images/langCpp.jpg';
import langCsharp from '../../../media/images/langCsharp.jpg';
import langPhp from '../../../media/images/langPhp.jpg';
import langMysql from '../../../media/images/langMysql.jpg';
import langHtml from '../../../media/images/langHtml.jpg';
import langCss from '../../../media/images/langCss.jpg';
import langNode from '../../../media/images/langNode.jpg';
import langJavascript from '../../../media/images/langJavascript.jpg';
import langExpress from '../../../media/images/langExpress.jpg';
import langMongodb from '../../../media/images/langMongodb.jpg';
import langReact from '../../../media/images/langReact.jpg';
import langRedux from '../../../media/images/langRedux.jpg';
import langSass from '../../../media/images/langSass.jpg';
import langGit from '../../../media/images/langGit.jpg';
import background from '../../../media/images/desktop-background.jpg';
import { useTranslation } from 'react-i18next';

function Skills({handleCloseModal}){

    const [t] = useTranslation('lang');

    const skills = {
        soft: [
            {
                name: t('skills.team'),
                icon: teamwork
            },{
                name: t('skills.learn'),
                icon: fastlearning
            },{
                name: t('skills.communication'),
                icon: communicative
            },{
                name: t('skills.problems'),
                icon: problemsolving
            },{
                name: t('skills.results'),
                icon: goaloriented
            },{
                name: t('skills.responsability'),
                icon: responsibility
            }
        ],
        hard: [
            {
                name: 'C',
                icon: langC
            },{
                name: 'C++',
                icon: langCpp
            },{
                name: 'C#',
                icon: langCsharp
            },{
                name: 'PHP',
                icon: langPhp
            },{
                name: 'MySQL',
                icon: langMysql
            },{
                name: 'HTML5',
                icon: langHtml
            },{
                name: 'CSS',
                icon: langCss
            },{
                name: 'Javascript',
                icon: langJavascript
            },{
                name: 'Node',
                icon: langNode
            },{
                name: 'Express',
                icon: langExpress
            },{
                name: 'MongoDB',
                icon: langMongodb
            },{
                name: 'React',
                icon: langReact
            },{
                name: 'Redux',
                icon: langRedux
            },{
                name: 'Sass',
                icon: langSass
            },{
                name: 'Git',
                icon: langGit
            }
        ]
    }

    const soft = skills.soft;
    const hard = skills.hard;
    return (
        <div className="skills_container">
            <img className='image' src={background} alt="Imagen de fondo" />
            <div className="title">
                <h1>{t('skills.title')}</h1>
            </div>
            <div className="main">
                <div className="section softSkills">
                    <div className="skillsTitle">
                        <h2>{t('skills.soft')}</h2>
                    </div>
                    <ul className="skillsList">
                        {soft.map(e =>
                            <li key={e.name}>
                                <img src={e.icon} className='skill-icon' alt="icon"/>
                                <p>{e.name}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="section hardSkills">
                    <div className="skillsTitle">
                        <h2>{t('skills.hard')}</h2>
                    </div>
                    <ul className="skillsList">
                        {hard.map(e => 
                            <li key={e.name}>
                                <img src={e.icon} className='skill-icon' alt="icon"/>
                                <p>{e.name}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            
            <button onClick={handleCloseModal}>
                {t('display.closeButton')}
            </button>
        </div>
    );
}

export default Skills;