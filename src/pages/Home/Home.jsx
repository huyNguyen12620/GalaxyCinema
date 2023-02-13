import React from 'react';
import Carousel_Home from '../../components/Carousel/Carousel_Home';
import Menu from '../../components/Menu/Menu';
import MenuFilm from '../../components/MenuFilm/MenuFilm';
import About from '../About/About';


export default function Home() {
  return (
    <>   
    <Carousel_Home/>
    <MenuFilm/>
    <About/>
    </>
  )
}
