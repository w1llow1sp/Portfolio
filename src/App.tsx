// import styles
import './App.css'
// import React
import {memo, useEffect} from "react";
//import React Router Dom
import {Routes,Route, useLocation} from "react-router-dom";
//import pages
import {About, Contact, Home, Portfolio} from "./pages";
// import components
import {Navbar, Themes} from "./components";
// import animation for routing
import {AnimatePresence} from "framer-motion";
//import i18n
import {useTranslation } from "react-i18next";



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




