// import styles
import './portfolio.css'
// import components
import {PortfolioItem} from "../../components";
// import animations
import transition from "../../utils/transition";
// import constants
import {portfolioData} from "../../constants";
//import translation
import { t } from "i18next";



const Portfolio =
    () => {
    return (
        <section className="portfolio section">
            <h2 className="section__title">
                {t(portfolioData.header.header)}
                <span> {t(portfolioData.header.spanName)}</span>
            </h2>

            <div className="portfolio__container container grid">
                {portfolioData.portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item}/>
                })}
            </div>
        </section>
    );
}


export default  transition(Portfolio);
