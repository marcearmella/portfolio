import profilePicture from '../../../media/images/foto-perfil2.png';

function About({handleCloseModal}){
    
    return (
        <div className="about_container">
            <div className="header">
                <h1>Hola, soy Marcelo Augusto Armella !</h1>
            </div>
            <div className="aside">
                <img className='profilePicture' src={profilePicture} alt="Foto de Marcelo Armella" />
            </div>
            <div className="main">
                <p>
                    Fullstack web developer, recientemente graduado del bootcamp "Soy Henry", en donde adquirí muchos conocimientos sobre NodeJs, React con múltiples librerías, Express y más. Además de aprender a trabajar en grupo con metodologías SCRUM y usando tecnologías como Git.
                </p>
            </div>
            <button onClick={handleCloseModal}>
                ATRAS
            </button>
        </div>
    );
}

export default About;