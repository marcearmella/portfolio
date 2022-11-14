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
import { useTranslation } from "react-i18next";

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

    const [t] = useTranslation('lang');

    const links = [
        {
            link: t('navMenu.about'),
            element: <About handleCloseModal={handleCloseModal} />
        },{
            link: t('navMenu.skills'),
            element: <Skills handleCloseModal={handleCloseModal} />
        },{
            link: t('navMenu.projects'),
            element: <Projects handleCloseModal={handleCloseModal} />
        },{
            link: t('navMenu.contact'),
            element: <Contact handleCloseModal={handleCloseModal} />
        }
    ];

    return (
        <div className="navMenu">
            {openModal && (
                <div className="navMenu_modal">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className='icon-right arrow-icons'
                        onClick={nextSlide}
                        size="2x"
                    />
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className='icon-left arrow-icons'
                        onClick={prevSlide}
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