import {useState} from "react";
// import translation
import {useTranslation} from "react-i18next";
// import styles
import  './LangButton.css'

export type LangButtonPropsType = {
    img:any
    modalFunction:(isLangModalOpen:boolean) => void
    isLangModalOpen:boolean
    lang:string
    activeLang: string
}


const LangButton = ({
                        img,
                        modalFunction,
                        isLangModalOpen,
                        lang,
                        activeLang
                    }:LangButtonPropsType) => {
    const {i18n} = useTranslation();

    const changeLanguage = (currentLang: string) => {
        i18n.changeLanguage(currentLang);
        localStorage.setItem("lng", currentLang);
    };

    const handleButtonClick = (lang: string) => {
        modalFunction(!isLangModalOpen)
        changeLanguage(lang);
    }

    return (
        <>
            <button
                className={'lang__btn'}
                onClick={() => handleButtonClick(lang)}>
                <img src={img}
                     alt=""
                     className={'lang__icon'}/>
            </button>
        </>
    );
};

export default LangButton;