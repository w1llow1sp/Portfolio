//import React
import React from "react";
//import styles
import './home.css'
//import components
import Profile from '../../assets/home.jpg'
//import React Router Dom
import { Link } from 'react-router-dom'
//import transition
import { motion } from "framer-motion";
import transition, {slideIn} from "../../utils/transition";
//import icons
import { FaArrowRight } from "react-icons/fa";
// import translation
import { t } from 'i18next';

const Home = React.memo(() => {

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
                        <span>{t('home.title.hi')}</span>
                        {t('home.title.text')}
                    </h1>

                    <p className="home__description">
                        {t('home.description.text')}
                    </p>

                    <Link to={'/about'} className={'button'}>
                        {t('home.buttonText.text')}
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



