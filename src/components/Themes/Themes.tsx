import React, {useEffect, useState} from 'react';
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
import { useTranslation } from "react-i18next";
import {themes} from "../../../constants";
import {getStorageColor} from "../../utils/localStorage/getStorageColor";
import {getStorageTheme} from "../../utils/localStorage/getStorageTheme";






const Themes = () => {

    const [showSwitcher, setShowSwitcher] = useState<boolean>(false);
    const [color, setColor] = useState<string>(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    {/*Language settings*/}
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);

    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    {/*Language settings*/}

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

    useEffect(() => {

    }, []);


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
                <h3 className="style__switcher-title">Style Switcher</h3>
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
                    <button
                        className={'lang__btn'}
                        onClick={() => changeLanguage("ru")}>
                        <img src={RU} alt="" className={'lang__icon'}/>
                    </button>

                    <button
                        className={'lang__btn'}
                        onClick={() => changeLanguage("en")}>
                        <img src={EN} alt="" className={'lang__icon'}/>
                    </button>
                </div>

                <div className="style__switcher-close" onClick={() => setIsLangModalOpen(!isLangModalOpen)}>&times;</div>
            </div>
            {/*Language Switch modal*/}
        </div>
    );
};

export default Themes;