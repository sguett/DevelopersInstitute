import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import '../images';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

let styles = {
  margin: 'auto',
  width: '500px'
};

// class DemoCarousel extends Component {
function DemoCarousel() {
  // render() {
  return (
    <div style={styles}>
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="../jrfyzvgzvhs1iylduuhj.jpg" alt="" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="../liw377az16sxmp9a6ylg.webp" alt="" />
          <p className="legend">Las vegas</p>
        </div>
        <div>
          <img src="../e8fnw35p6zgusq218foj.webp" alt="" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="../c1cklkyp6ms02tougufx.webp" alt="" />
          <p className="legend">Macao</p>
        </div>
      </Carousel>
    </div>
  );
  // }
};

export default DemoCarousel;
