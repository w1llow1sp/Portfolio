//import styles
import './skills.css'
//import circular progressbar
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import constants
import {skillsData} from "../../constants";

const Skills =
    () => {
    return (
        <>
            {skillsData.items.map(({title, percentage, img}, index) => {
                return (
                    <div className={'progress__box'} key={index}>
                        <div className="progress__circle">
                            <CircularProgressbarWithChildren
                                strokeWidth={7.5}
                                value={percentage}

                            >
                                <div className={'progress__label '}>{img}</div>
                                <div className={'progress__text'}>{`${percentage}%`}</div>
                            </CircularProgressbarWithChildren>

                        </div>
                        <h3 className="skills__title">
                            {title}
                        </h3>

                    </div>
                )
            })}
        </>
    );
}
export default Skills;