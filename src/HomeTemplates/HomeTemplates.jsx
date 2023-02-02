import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import Carousel_Home from '../components/Carousel/Carousel_Home';
import Home from './../pages/Home/Home';
import Menu from './../components/Menu/Menu';
import MenuFilm from './../components/MenuFilm/MenuFilm';

export default function HomeTemplates() {
  return (
    <>
        <Header/>
        <Menu/>
        <Carousel_Home/>
        <MenuFilm/>
        <Outlet/>

        

    
    </>
  )
}


