import React, { Component } from 'react';
import '../App.css';
import { Button } from './Button';
import './landing.css';


class landing extends Component  {

  render() {
  return (
    <div className='landing-container'>
      <video src='/videos/slider.mp4' autoPlay loop muted />
      
      <img src='/images/2.png'
        alt="logo"
        className="logo-img"/>
      <p1>L'expertise de nos<br/> équipes</p1> 

      <p>BIM </p>
      <p2>au cœur de votre</p2> <br/>
      <p4>Stratégie</p4>
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          
        Commencer
          
        </Button>
        
     </div>
    </div>
  );

}
}
export default landing;
