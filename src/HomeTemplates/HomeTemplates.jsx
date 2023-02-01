import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import Carousel_Home from '../pages/Home/Carousel_Home';
import Home from './../pages/Home/Home';

export default function HomeTemplates() {
  return (
    <>
        <Header/>
        <Carousel_Home/>
        <Outlet/>
     
        

    
    </>
  )
}


