import React, { Component } from 'react';


import Home from '../Home/Home.jsx';

import About from '../About/About.jsx';
import Skils from '../Skils/Skils.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';




export default class App extends Component
{
  state={}
  render()
  {
    return (
      <>
       {/* <Home/>
       <About/>
        <Skils/> 
        <Portfolio/>
        <Footer/> */}
        <Login/>
        
        {/* <Register/> */}
      

  
      </>
  
      
      
    )

   
  }
}
