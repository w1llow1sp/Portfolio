//import React Router Dom
import {Routes,Route, useLocation} from "react-router-dom";
// import styles
import './App.css'
//import components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Themes from "./components/Themes/Themes";
// import animation for routing
import {AnimatePresence} from "framer-motion";
//import i18n
import {memo, useEffect} from "react";
import {useTranslation } from "react-i18next";
// остальной код


const App = memo(() => {
    const location = useLocation()
    const {i18n} = useTranslation()

    useEffect(() => {
        const lng = localStorage.getItem('lng') || 'ru';
        i18n.changeLanguage(lng);
    }, []);

    return (
        <>
            <Navbar/>
            <Themes/>
            <AnimatePresence mode={"wait"}>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'portfolio'} element={<Portfolio/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                </Routes>
            </AnimatePresence>
        </>
    )
})

export default App




