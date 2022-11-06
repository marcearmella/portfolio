import {useState} from "react";
import About from "../Display/About/About";
import Contact from "../Display/Contact/Contact";
import Projects from "../Display/Projects/Projects";
import Skills from "../Display/Skills/Skills";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(links.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    const nextSlide = () => {
        slideNumber + 1 === links.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    const links = [
        {
            link: 'sobre mí',
            element: <About handleCloseModal={handleCloseModal} />
        },{
            link: 'habilidades',
            element: <Skills handleCloseModal={handleCloseModal} />
        },{
            link: 'proyectos',
            element: <Projects handleCloseModal={handleCloseModal} />
        },{
            link: 'contáctame',
            element: <Contact />
        }
    ];

    return (
        <div className="navMenu">
            {openModal && (
                <div className="navMenu_modal">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='icon-right'
                        onClick={nextSlide}
                        size="2x"
                    />
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className='icon-left'
                        onClick={prevSlide}
                        size="2x"
                    />
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className='icon-close'
                        onClick={handleCloseModal}
                        size="2x"
                    />
                    {links[slideNumber].element}
                </div>
            )}

            <div className="navMenu_container">
                <ul className="nav_ul" style={{zIndex: 10}}>
                    {links.map((slide, index) => {
                        return (
                            <li key={index} onClick={() => handleOpenModal(index)}>
                                <p>{slide.link}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;