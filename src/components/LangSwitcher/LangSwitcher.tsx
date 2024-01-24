import React, {useState} from "react";
import { useTranslation } from "react-i18next";


const SwithLang: React.FC = ({toggler,isOpen}) => {
    const { i18n } = useTranslation();


    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (

        <div className={`${isOpen ? 'show-switcher-lang' : 'lang__switcher'}`}>
            {i18n.language === "en" ? (
                <button onClick={() => changeLanguage("ru")}>Версия на русском</button>
            ) : (
                <button onClick={() => changeLanguage("en")}>English version</button>
            )}
        </div>

    );
};

export default SwithLang;