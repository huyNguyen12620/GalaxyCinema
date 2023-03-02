import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import React from 'react'
import { Outlet } from "react-router-dom";

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


