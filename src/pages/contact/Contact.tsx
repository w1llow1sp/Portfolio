//import styles
import './contact.css'
// import icons
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaTelegram,
    FaCode,
    FaLinkedin,
} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
//import transitions
import transition, {itemVariants} from "../../utils/transition";
import { motion } from "framer-motion";
//import translations
import { t } from "i18next";
//import constants
import {contactsData} from "../../constants";
import {ChangeEvent, FormEvent, useRef, useState} from "react";
// import EmailJSService
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject:"",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // valid
        if (!form.name.length || !form.email.length) {
            alert(t("contact.no_valid"));
            return;
        }

        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Сайт портфолио w1llow1sp",
                    from_email: form.email,
                    to_email: "mari.74.front@gmail.com",
                    message: form.message,
                    user_email:form.email,
                    user_subject:form.subject,
                    user_name:form.name
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert(t("contact.thank"));

                    setForm({
                        name: "",
                        email: "",
                        subject:"",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert(t("contact.wrong"));
                }
            );
    };


        return (
            <section className={'contact section'}>
                <h2 className={'section__title'}>
                    {t(contactsData.header.header)}
                    <span> {t(contactsData.header.spanName)}</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">
                            {t(contactsData.sectionText.subheader)}
                        </h3>
                        <p className="contact__description">
                            {t(contactsData.sectionText.text)}
                        </p>
                        <div className="contact__info">
                            <motion.div
                                className="info__item"
                                variants={itemVariants}
                                initial="hidden"
                                whileHover="visible"
                            >
                                <FaEnvelopeOpen className={'info__icon'}/>

                                <div>
                                <span className="info__title">
                                    {t(contactsData.forIconText.email)}
                                </span>
                                    <h4 className="info__desc">mari.74.front@gmail.com</h4>
                                </div>
                            </motion.div>
                            <motion.div
                                className="info__item"
                                variants={itemVariants}
                                initial="hidden"
                                whileHover="visible"
                            >
                                <FaPhoneSquareAlt className={'info__icon'}/>

                                <div>
                                    <span className="info__title"> {t(contactsData.forIconText.phone)}</span>
                                    <h4 className="info__desc">+7 919 356 3991</h4>
                                </div>
                            </motion.div>

                            <div className="contact__social">
                                <motion.a
                                    href="https://t.me/AimlessPrayer"
                                    className="contact__social-link"
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileHover="visible"
                                >
                                    <FaTelegram />
                                </motion.a>

                                <motion.a
                                    href="https://career.habr.com/w1llow1sp"
                                    className="contact__social-link"
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileHover="visible"
                                >
                                    <FaCode />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    className="contact__social-link"
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileHover="visible"
                                >
                                    <FaLinkedin />
                                </motion.a>
                            </div>

                        </div>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact__form">
                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input type="text"
                                       name={'name'}
                                       value={form.name}
                                       onChange={handleChange}
                                       placeholder={`${t(contactsData.formText.name)}`}
                                       className="form__control"/>
                            </div>

                            <div className="form__input-div">
                                <input type="email"
                                       name={'email'}
                                       value={form.email}
                                       onChange={handleChange}
                                       placeholder={`${t(contactsData.formText.mail)}`}
                                       className="form__control"/>
                            </div>

                            <div className="form__input-div">
                                <input type="text"
                                       name={'subject'}
                                       value={form.subject}
                                       onChange={handleChange}
                                       placeholder={`${t(contactsData.formText.subject)}`}
                                       className="form__control"/>
                            </div>
                        </div>
                        <div className="form__input-div">
                        <textarea
                            name={'message'}
                            value={form.message}
                            onChange={handleChange}
                            placeholder={`${t(contactsData.formText.message)}`}
                            className={'form__control textarea'}></textarea>
                        </div>
                        <button
                            type={"submit"}
                            className="button">
                            {`${t(contactsData.formText.btnText)}`}
                            <span className={'button__icon contact__button-icon'}>
                            <FiSend/>
                        </span>
                        </button>
                    </form>
                </div>
            </section>
        );
    }

export default transition(Contact);

