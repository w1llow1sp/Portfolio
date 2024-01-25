import React from "react";
//import styles
import './about.css'
//import components
import Info from "../../components/Info/Info";
import Stats from "../../components/Stats/Stats";
import ResumeItem from "../../components/Resume/ResumeItem";
import Skills from "../../components/Skills/Skills";
//import transition
import { motion } from "framer-motion";
import transition, {slideIn} from "../../utils/transition";
//import icons
import { FaDownload } from "react-icons/fa";
//import CV
import CV from '../../assets/CV.pdf'
// import translation
import { t } from 'i18next';
//import constants
import {experienceAndEducation, sectionAboutText, skillsData} from "../../../constants";

const About = React.memo(
    () => {
    return (
        <main className="section container">
            {/* ===SECTION ABOUT START===   */}
            <section className="about">
                <h2 className="section__title">
                    {t(sectionAboutText.header.header)}
                    <span> {t(sectionAboutText.header.spanName)}</span>
                </h2>
                <div className="about__container grid">
                    <motion.div
                        className="about__info"
                        variants={slideIn}
                        initial="hidden"
                        animate="show"
                    >
                        <h3 className='section__subtitle'>Personal Infos</h3>
                        <ul className="info__list grid">
                            <Info/>
                        </ul>

                        <a href={CV} download={''} className="button">
                            {t(sectionAboutText.buttonText.text)}{''}
                            <span className="button__icon"> <FaDownload/></span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="stats grid"
                        variants={slideIn}
                        initial="hidden"
                        animate="show"
                    >
                        <Stats/>
                    </motion.div>
                </div>
            </section>
            <div className="separator"></div>
            {/* ===SECTION ABOUT END===   */}

            {/* ===SECTION SKILLS START=== */}
            <section className={'skills'}>
                <h3 className={'section__subtitle subtitle__center'}>
                    {t(skillsData.title)}
                </h3>

                <motion.div
                    className="skills__container grid"
                    variants={slideIn}
                    initial="hidden"
                    animate="show"
                >
                    <Skills/>
                </motion.div>

            </section>
            <div className="separator"></div>
            {/* ===SECTION SKILLS END=== */}

            {/* ===SECTION RESUME START=== */}
            <section className="resume">
                <h3 className={'section__subtitle subtitle__center'}>
                    {t(experienceAndEducation.header)}
                </h3>
                <motion.div
                    className="resume__container grid"
                    variants={slideIn}
                    initial="hidden"
                    animate="show"
                >
                    <div className="resume__data">
                        {experienceAndEducation.details.map((value) => {
                            if(value.category==='experience') {
                                return <ResumeItem
                                    key={value.id}
                                    icon={value.icon}
                                    year={value.year}
                                    title={value.title}
                                    desc={value.desc}
                                />
                            }
                        })}
                    </div>

                    <div className="resume__data">
                        {experienceAndEducation.details.map((value) => {
                            if(value.category==='education') {
                                return <ResumeItem
                                    key={value.id}
                                    icon={value.icon}
                                    year={value.year}
                                    title={value.title}
                                    desc={value.desc}/>
                            }
                        })}
                    </div>
                </motion.div>
            </section>
            <div className="separator"></div>
            {/* ===SECTION RESUME END=== */}
        </main>
    );
})
export default transition(About);


