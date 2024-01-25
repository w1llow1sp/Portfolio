import React from 'react';
//import styles
import '../../pages/about/about.css'
// import translation
import { t } from 'i18next';
// import components
import {personalInfo} from "../../../constants";

const Info = React.memo(
    () => {
    return (
        <>
            {personalInfo.map(({title,description},index) => {
                return (
                    <li className="info__item" key={index}>
                        <span className="info__title">{t(title)}</span>
                        <span className="info__descriptions">{t(description)}</span>
                    </li>
                )
            })}
        </>
    );
})


export default Info;