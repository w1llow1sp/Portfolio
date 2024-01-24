import React from 'react';
import {personalInfo} from "../../helpers/data";
import '../../pages/about/about.css'

const Info = () => {
    return (
        <>
            {personalInfo.map(({title,description},index) => {
                return (
                    <li className="info__item" key={index}>
                        <span className="info__title">{title}</span>
                        <span className="info__descriptions">{description}</span>
                    </li>
                )
            })}
        </>
    );
};

export default Info;