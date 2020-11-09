
import React, { Component } from 'react';
import './landing.css';


import Navbar from '../components/Navbar';
import Intro from '../components/intro';
import Services from '../components/services';
import Aboutus from '../components/aboutus';



class home extends Component{

render(){

    
    return(
<div className='home-page'>
<Navbar/>

 <Intro/>



<img src='/images/4_1.png' height='700' width='100%' />



 <Services/> 

 <img src='/images/11.png' height='1200' width='100%'/>


 <Aboutus/>
 {/*

<div className="intro2">
<img src='11.png' height='900' width='80%' /></div>
<div className="intro3">
<img src='10_1.png' height="150" widh="50%"/>
</div>

<div className="intro2">
<img src='12.png' height='900' width='70%' />
</div>  */}
  </div>      
    )
}

}
export default home;