import Carousel_Home from 'components/Carousel/Carousel_Home';
import MenuFilm from 'components/MenuFilm/MenuFilm';
import React from 'react';

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
