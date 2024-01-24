


//import React
import React from "react";
//import styles
import './home.css'
//import components
import { motion } from "framer-motion";


import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import transition, {slideIn} from "../../helpers/transition";
import {useTranslation} from "react-i18next";


const Home = React.memo(() => {
    const {t,i18n} = useTranslation()

    return (
        <section className={'home section grid'}>
            <motion.img
                src={Profile}
                alt=""
                className="home__img"
                loading={"lazy"}
                variants={slideIn}
                initial="hidden"
                animate="show"
            />
            <div className="home__content">
                <motion.div
                    className="home__data"
                    variants={slideIn}
                    initial="hidden"
                    animate="show"
                >
                    <h1 className="home__title">
                        <span>I`m Mariya Mokeeva.</span>
                        Frontend Developer
                    </h1>

                    <p className="home__description">
                        I`m Russia based front-end developer focused on crafting clear and user-friendly experiences. I
                        am passionate about building excellent software that improves the lives of those around me.
                    </p>

                    <Link to={'/about'} className={'button'}>
                        More About Me
                        <span className={'button__icon'}>
                           <FaArrowRight/>
                        </span>
                    </Link>
                </motion.div>
            </div>

            <div className="color__block"></div>
        </section>
    );
})

export default transition(Home);



