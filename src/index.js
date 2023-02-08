import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import '../src/assets/css/style.css'
import history from 'react-router-dom'

import App from './App';

// Cấu hình react-router-dom
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import HomeTemplates from './HomeTemplates/HomeTemplates';
import Header from './components/Header/Header.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomeTemplates/>}>
                <Route path='home' element={<Home/>}></Route>
                <Route path='contact' element={<Contact/>}></Route>
                <Route path='about' element={<About/>}></Route>

            </Route>
            
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>

        </Routes>
    </BrowserRouter>
  
);

