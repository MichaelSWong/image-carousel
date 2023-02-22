import React, { useState } from 'react';
import './App.css';

const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div id='slider'>
        <div className='left-arrow' onClick={prevSlide}>
          ⬅
        </div>
        <div className='right-arrow' onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={index} className='slide'>
                <img src={image} alt='images' />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default App;
