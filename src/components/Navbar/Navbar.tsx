import  {useState} from 'react';
// import styles
import './navbar.css'
// import React Router DOM
import {NavLink} from "react-router-dom";
//import translations
import { t } from "i18next";
// import constants
import { navLinksData} from "../../constants";

const Navbar = () => {

        const [showMenu,setShowMenu] = useState<boolean>(false)

        const toggleMenu = () => {
            setShowMenu(!showMenu)
        }

        return (
            <nav className="nav">
                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <ul className="nav__list">
                        {navLinksData.map(({name, icon, path}, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <NavLink
                                        to={path}
                                        aria-label={`Navigate to section${name}`}
                                        className={({isActive}) => isActive
                                        ? 'nav__link active-nav' : 'nav__link'}
                                             onClick={toggleMenu}
                                    >
                                        {icon}
                                        <h3 className="nav__name">{t(name)}</h3>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                     onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        )}



export default Navbar;