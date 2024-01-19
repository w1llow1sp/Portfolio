

import Info from "../../components/Info/Info";
import Stats from "../../components/Stats/Stats";
import {FaDownload} from "react-icons/fa";
import CV from '../../assets/CV.pdf'

import './about.css'
import Skills from "../../components/Skills/Skills";
import {resume} from "../../data";
import ResumeItem from "../../components/Resume/ResumeItem";

const About = () => {
    return (
        <main className="section container">
            {/* ===SECTION ABOUT START===   */}
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>
                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className='section__subtitle'>Personal Infos</h3>
                        <ul className="info__list grid">
                            <Info/>
                        </ul>

                        <a href={CV} download={''} className="button">
                            Download CV{''}
                            <span className="button__icon"> <FaDownload/></span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats/>
                    </div>
                </div>
            </section>
            <div className="separator"></div>
            {/* ===SECTION ABOUT END===   */}

            {/* ===SECTION SKILLS START=== */}
            <section className={'skills'}>
                <h3 className={'section__subtitle subtitle__center'}>
                    My Skills
                </h3>

                <div className="skills__container grid">
                    <Skills/>
                </div>


            </section>
            <div className="separator"></div>
            {/* ===SECTION SKILLS END=== */}

            {/* ===SECTION RESUME START=== */}
            <section className="resume">
                <h3 className={'section__subtitle subtitle__center'}>
                    Experience & Education
                </h3>
                <div className="resume__container grid">
                    <div className="resume__data">
                        {resume.map((value) => {
                            if(value.category==='experience') {
                                return <ResumeItem key={value.id} {...value}/>
                            }
                        })}
                    </div>

                    <div className="resume__data">
                        {resume.map((value) => {
                            if(value.category==='education') {
                                return <ResumeItem key={value.id} {...value}/>
                            }
                        })}
                    </div>
                </div>
            </section>
            <div className="separator"></div>
            {/* ===SECTION RESUME END=== */}
        </main>
    );
};

export default About;