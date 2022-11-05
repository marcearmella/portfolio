import skills from './data/skills_data.js';
import background from '../../../media/images/desktop-background.jpg';

function Skills(){
    const soft = skills.soft;
    const hard = skills.hard;
    return (
        <div className="skills_container">
            <img className='image' src={background} alt="Imagen de fondo" />
            <div className="title">
                <h1>Mis Habilidades</h1>
            </div>
            <div className="main">
                <div className="section softSkills">
                    <div className="skillsTitle">
                        <h2>Blandas</h2>
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
                        <h2>Duras</h2>
                    </div>
                    <div className="skillsList">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;