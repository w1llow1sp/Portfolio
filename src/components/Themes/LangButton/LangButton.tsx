import {useState} from "react";
// import translation
import {useTranslation} from "react-i18next";
// import styles
import styles from './LangButton.module.css'

export type LangButtonPropsType  = {
    img:any
    modalFunction:(isLangModalOpen:boolean) => void
    isLangModalOpen:boolean
    lang:string
}

const LangButton = ({
                        img,
                        modalFunction,
                        isLangModalOpen,
                        lang
                    }:LangButtonPropsType) => {

    const {i18n} = useTranslation();
    const [isActive, setIsActive] = useState(false);

    const changeLanguage = (currentLang: string) => {
        i18n.changeLanguage(currentLang);
        localStorage.setItem("lng", currentLang);
    };

    const handleButtonClick = (lang: string) => {
        setIsActive(!isActive);
        modalFunction(!isLangModalOpen)
        changeLanguage(lang);

    }

        return (
            <>
                <button
                    className={`${styles.langBtn} ${isActive ? `${styles.active}` : ''}`}
                    onClick={() => handleButtonClick(lang)}>
                    <img src={img}
                         alt=""
                         className={styles.langIcon}/>
                </button>

            </>
        );
    };

export default LangButton;