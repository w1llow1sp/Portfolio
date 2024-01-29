import {useEffect, useState} from 'react';
import './themes.css'
//import picture
import RU from '../../assets/ru.svg'
import EN from '../../assets/en.svg'
//import components
import ThemeItem from "./ThemeItem";
//import data
//import icons
import {FaCog} from "react-icons/fa";
import {BsSun, BsMoon, BsTranslate} from "react-icons/bs";
//
import {t} from 'i18next';
import {themeHeader, themes} from "../../constants";
import {getStorageColor} from "../../utils/localStorage/getStorageColor";
import {getStorageTheme} from "../../utils/localStorage/getStorageTheme";
import LangButton from "./LanguageSwitcher/LangButton/LangButton";


const Themes = () => {

    const [showSwitcher, setShowSwitcher] = useState<boolean>(false);
    const [color, setColor] = useState<string>(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('');


    const changeColor = (color: string) => {
        setColor(color)
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color)
    }, [color]);


    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme]);


    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                {/*Language toggler*/}
                <div className="language__toggler"
                     onClick={() => setIsLangModalOpen(!isLangModalOpen)}>
                    <BsTranslate/>
                </div>
                {/*Language toggler*/}

                {/*Color toggler*/}
                <div className="style__switcher-toggler"
                     onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog/>
                </div>
                {/*Color toggler*/}

                {/*Theme toggler*/}
                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
                </div>
                {/*Theme toggler*/}


                {/*Styles switcher modal*/}
                <h3 className="style__switcher-title">
                    {t(themeHeader.header)}
                </h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                        )
                    })}
                </div>
                <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
                {/*Styles switcher modal*/}


            </div>
            {/*Language Switch modal*/}
            <div className={`${isLangModalOpen ? 'show-switcher-lang' : ''} lang__switcher`}>
                <div className={'lang__container'}>
                    <LangButton
                        img={RU}
                        lang={'ru'}
                        modalFunction={() => setIsLangModalOpen(!isLangModalOpen)}
                        isLangModalOpen={isLangModalOpen}
                        activeLang={activeLang}
                    />
                    <LangButton
                        img={EN}
                        lang={'en'}
                        modalFunction={() => setIsLangModalOpen(!isLangModalOpen)}
                        isLangModalOpen={isLangModalOpen}
                        activeLang={activeLang}
                    />

                    <div
                        className="style__switcher-close"
                        onClick={() => setIsLangModalOpen(!isLangModalOpen)}>
                        &times;
                    </div>
                </div>

            </div>
            {/*Language Switch modal*/}
        </div>
    );
}

export default Themes;



