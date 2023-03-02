import Carousel_Home from 'components/Carousel';
import MenuFilm from 'components/MenuFilm';
import React from 'react';

import About from '../About';


export default function Home() {
  return (
    <>   
    <Carousel_Home/>
    <MenuFilm/>
    <About/>
    </>
  )
}
