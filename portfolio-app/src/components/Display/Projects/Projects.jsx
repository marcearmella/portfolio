function Projects({handleCloseModal}){
    return (
        <div className="projects_container">
            <div className="title">
                <h1>Proyectos</h1>
            </div>
            <div className="main">
                <div className="project">
                    <div className="image">

                    </div>
                    <div className="text">
                        <h2>Wiki de Videojuegos</h2>
                        <p>Sitio Web de una enciclopedia de videojuegos, creada en base a una API externa.<br/><b>Back:</b> Node, Express, PostgreSQL<br/><b>Front:</b> React, CSS modules</p>
                    </div>
                </div>
                <div className="project">
                    <div className="image">
                        
                    </div>
                    <div className="text">
                        <h2>FlyMate</h2>
                        <p>Aplicación móvil para la compra de pasajes aéreos, con manejo se sesión, reseñas y más.<br/><b>Back:</b> Node, Express, MongoDB<br/><b>Front:</b> React Native</p>
                    </div>
                </div>
                <div className="project">
                    <div className="image">
                        
                    </div>
                    <div className="text">
                        <h2>Imprenta Modelo</h2>
                        <p>Sitio Web de un negocio familiar, usada como página promocional para la mísma. Antes creada en PHP, se decidió mudarla a React<br/><b>Front:</b> React, CSS modules</p>
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