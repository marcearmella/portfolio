import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import env from '../../../env';

function Contact({handleCloseModal}){
    const refForm = useRef();

    const notifySuccess = () => toast.success("✅ Correo enviado!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyFailure = () => toast.failure("⚠️ Ups algo salio mal, intentalo de nuevo!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
                }, 5000);
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
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="inputs">
                        <input className="input" placeholder="Nombre" type="text" name="name" required />
                        <input className="input" placeholder="Email" type="email" name="email" required />
                        <input className="input" placeholder="Asunto" type="text" name="subject" required />
                        <textarea
                            className="input"
                            placeholder="Deja tu mensaje"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <button onClick={handleCloseModal}>
                CERRAR
            </button>
        </div>
    );
}

export default Contact;