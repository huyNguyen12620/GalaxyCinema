import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import Carousel_Home from '../components/Carousel/Carousel_Home';
import Home from './../pages/Home/Home';
import Menu from './../components/Menu/Menu';
import MenuFilm from './../components/MenuFilm/MenuFilm';
import About from './../pages/About/About';
import Footer from './../components/Footer/Footer';

export default function HomeTemplates() {
  return (
    <>
        <Header/>
        <Menu/>
        <Carousel_Home/>
        <MenuFilm/>
        <About/>
        <Outlet/>
        <Footer/>


        

    
    </>
  )
}


