import  {useState} from 'react';
// import  icon
import Close from  '../../assets/close.svg'
// import translation
import { t } from "i18next";

export type PortfolioItemPropsType = {
    img:any,
    title:string,
    details: [
        {
            icon?: JSX.Element
            title: string
            desc: string
        },
        {
            icon?: JSX.Element
            title: string
            desc: string
        },
        {
            icon?: JSX.Element
            title: string
            desc: string
        },
        {
            icon?: JSX.Element
            title: string
            desc: string
        },
    ]
}

const PortfolioItem =
    ({img, title, details}:PortfolioItemPropsType) => {
        const [isModalOpen, setIsModalOpen] = useState(false)

        const toggleModal = () => {
            setIsModalOpen(!isModalOpen)
        }

        return (
            <div className="portfolio__item">
                <img src={img} alt="" className="portfolio__img"/>

                <div className="portfolio__hover" onClick={toggleModal}>
                    <h3 className="portfolio__title">{t(`${title}`)}</h3>
                </div>

                {isModalOpen && (
                    <div className="portfolio__modal">
                        <div className="portfolio__modal-content">
                            <img src={Close} alt="" className="modal__close" onClick={toggleModal}/>

                            <h3 className="modal__title">{t(`${title}`)}</h3>
                            <ul className="modal__list grid">
                                {details.map(({icon,title, desc}, index) => {
                                    return (
                                        <li className="modal__item" key={index}>
                                            <span className={'item__icon'}>{icon}</span>
                                            <div>
                                            <span className={'item__title'}>
                                               {t(`${title}`)}
                                            </span>
                                                {index === details.length - 1 ? (
                                                    <a
                                                        href={desc}
                                                        target={'_blank'}
                                                        className={'item__details link'}>
                                                        {t(`${desc}`)}
                                                    </a>
                                                ) : (
                                                    <span className={'item__details'}>
                                                   {t(`${desc}`)}
                                                </span>
                                                )}
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>

                            <img
                                src={img}
                                loading={"lazy"}
                                alt={''} className="modal__img"/>
                        </div>
                    </div>
                )}
            </div>
        );
    }


export default PortfolioItem;