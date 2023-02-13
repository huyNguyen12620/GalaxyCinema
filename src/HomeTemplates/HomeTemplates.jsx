import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu';
import Footer from './../components/Footer/Footer';

export default function HomeTemplates() {
  return (
    <>
        <Header/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
  )
}


