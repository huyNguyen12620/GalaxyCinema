import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import Footer from './../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
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


