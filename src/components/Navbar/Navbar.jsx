import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container-fluid">
       <Link className="navbar-brand text-white" to="menu">Menu</Link>
       <a className="navbar-brand text-white" href="#">Favoriate</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link  className="nav-link active text-white" aria-current="page" to="Login">Login</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link text-white" to="Register">Register</Link>
           </li>
        
       
         
         </ul>
      
       </div>
     </div>
   </nav>
        </>
    )
  }
}
