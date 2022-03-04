import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
    <>
    
<footer>
    <div className="container-fluid bg-secondary mt-5">
      <div className="row">
  
  
        <div className='col-md-4 mt-5'>
          <i className='fa-solid fa-location-dot text-white fa-2x'></i><span className="text-white pe-3">Assuit</span>
          <br></br>
  
          <i className="fa-solid fa-mobile-button text-white fa-2x mt-3 "></i><span className="text-white pe-3">123456789</span>
          
  
  </div>
  <div className="col-md-4 mt-5">
   <button className="btn btn-danger text-center">Contact-Us</button>
  
  </div>
        <div className="col-md-4 mt-5">
                          <i className="fab fa-google fa-2x text-white  p-2"></i>
                          <i className="fab fa-facebook-f fa-2x text-white  p-2"></i>
                          <i className="fab fa-twitter fa-2x text-white  p-2"></i>
                          <i className="fab fa-linkedin-in fa-2x text-white p-2"></i>
                          
  
        </div>
  
      </div>
  
    </div>
  </footer>
    </>
    )
  }
}
