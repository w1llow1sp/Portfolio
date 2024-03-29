
// import translation
import {useTranslation} from "react-i18next";
// import styles
import  './LangButton.css'

export type LangButtonPropsType = {
    img:any
    modalFunction:(isLangModalOpen:boolean) => void
    isLangModalOpen:boolean
    lang:string
}


const LangButton = ({
                        img,
                        modalFunction,
                        isLangModalOpen,
                        lang,
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
                aria-label={`Смена языка на ${lang
                }`}
                onClick={() => handleButtonClick(lang)}>
                <img src={img}
                     id={lang}
                     alt=""
                     className={'lang__icon'}/>
            </button>
        </>
    );
};

export default LangButton;