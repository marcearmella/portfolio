import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import env from '../../../env';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAt, faSignature, faTags } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact({handleCloseModal}){
    const refForm = useRef();

    const notifySuccess = () => toast.success("✅ Correo enviado!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

    const notifyFailure = () => toast.failure("⚠️ Ups algo salio mal, intentalo de nuevo!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            env.SERVICE,
            env.TEMPLATE,
            refForm.current,
            env.KEY
        ).then(
            () => {
                notifySuccess();
                setTimeout(() => {
                    window.location.reload(false);
                }, 2000);
            },
            () => {
                notifyFailure();
            }
        );
    };

    return (
        <div className="contact_container">
            <div className="title">
                <h1>Contáctame</h1>
            </div>
            <div className="main">
                <form className="contact_form" ref={refForm} onSubmit={sendEmail}>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="inputs">
                        <div className="input_container">
                            <div className="input_icon">
                                <FontAwesomeIcon icon={faSignature} className="icon" />
                            </div>
                            <input className="input" placeholder="Nombre" type="text" name="name" required />
                        </div>
                        <div className="input_container">
                            <div className="input_icon">
                            <FontAwesomeIcon icon={faAt} className="icon" />
                            </div>
                            <input className="input" placeholder="Email" type="email" name="email" required />
                        </div>
                        <div className="input_container">
                            <div className="input_icon">
                                <FontAwesomeIcon icon={faTags} className="icon" />
                            </div>
                            <input className="input" placeholder="Asunto" type="text" name="subject" required />
                        </div>
                        <div className="input_container">
                            <textarea
                                className="textInput"
                                placeholder="Deja tu mensaje"
                                name="message"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Enviar" />
                </form>
                <div className="contact_links">
                    <a href="https://github.com/marcearmella" target="_blank">
                        <div className="link-container">
                            <h2>GitHub</h2>
                            <div className="link-icon">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/marcelo-armella/" target="_blank">
                        <div className="link-container">
                            <h2>Linkedin</h2>
                            <div className="link-icon">
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/marcemolo31/" target="_blank">
                        <div className="link-container">
                            <h2>Instagram</h2>
                            <div className="link-icon">
                                <FontAwesomeIcon icon={faInstagram} size="3x" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <button className="closeModal" onClick={handleCloseModal}>
                CERRAR
            </button>
        </div>
    );
}

export default Contact;