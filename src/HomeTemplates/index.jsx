import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
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


