import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import './i18n.ts'




ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/*' element={<App/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
)
