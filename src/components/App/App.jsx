import React, { Component } from 'react';


import Home from '../Home/Home.jsx';

import About from '../About/About.jsx';
import Skils from '../Skils/Skils.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Movie from '../Movie/Movie.jsx';
import Detailes from '../Detaies/Detailes.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';


export default class App extends Component
{
  state={}
  render()
  {
    return (
      <>
          <Navbar/>
   <div className='container'>
   <Routes>
       <Route path='movie' element={<Movie/>}> </Route>
       <Route path='Login' element={<Login/>}> </Route>
       <Route path='Register' element={<Register/>}> </Route>
       <Route path='detais' element={<Detailes/>}> </Route>
     </Routes>

   </div>
      
{/* <Home/>
<Portfolio/>
<Footer/>
<Skils/>   */}
      </>
  
      
      
    )

   
  }
}
