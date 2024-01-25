import React from 'react';
// import parser for
import parse from 'html-react-parser'
// import translation
import {t} from 'i18next';

type ResumeItemPropsType = {
    icon: JSX.Element
    year: string
    title: string
    desc: string

}

const ResumeItem = React.memo(
    ({icon, year, title, desc}: ResumeItemPropsType) => {
        return (
            <div className="resume__item">
                <div className="resume__icon">{icon}</div>
                <span className="resume__date">{t(year)}</span>
                <h3 className="resume__subtitle">{parse(`${t(title)}`)}</h3>
                <p className="resume__description">{t(desc)}</p>

            </div>
        )
    })


export default ResumeItem;