import React, { useState, useEffect } from 'react';
import Donqui from '../images/DonQuixote.jpg';
import hamlet from '../images/Hamlet.png';
import thegreat from '../images/TheGreatGatsby1.png';
import tokilla from '../images/tokillamockingbird.png';
import homecss from '../Styles/homecss.css'
import About from './About';

function Home() {
  return (
    <>
    <div className='home'>
      <div className="text-center mb-4">
        <h1 className="blinking inline">Welcome To fastLearner</h1>
      </div>
      </div>

    <div className='container'></div>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner images">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={Donqui} class="d-block" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={hamlet} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={thegreat} class="d-block" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={tokilla} class="d-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<About/>
      </>
  );
}

export default Home;
