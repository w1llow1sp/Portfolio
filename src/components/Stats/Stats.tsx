import React from 'react';
/*import {stats} from "../../utils/data";*/
import parse from 'html-react-parser'
import '../../pages/about/about.css'
import {statsData} from "../../../constants";
// import translation
import {t} from 'i18next';


const Stats = React.memo(
    () => {
        return (
            <>
                {statsData.map(({no, title}, index) => {
                    return (
                        <div className='stats__box' key={index}>
                            <h3 className="stats__no">{t(no)}</h3>
                            <p className="stats__title">{parse(`${t(title)}`)}</p>
                        </div>
                    )
                })}
            </>
        );
    }
);

export default Stats;