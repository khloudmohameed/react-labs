import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
     <>
     <section className="mt-5 s1 ">
    <div className='container'>
    <div className="row">
      
      <div className="col-md-6">
       <h1 className="mt-2">About Me</h1>
  
      </div>
      <div className="col-md-6">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis consequatur iste, ipsam mollitia expedita id illo fugit! Ipsam inventore labore dicta non sed culpa debitis assumenda asperiores reiciendis accusantium!</p>
   
      <a href="../assets/JSON and AJAX.pdf" download>
       <button className="btn btn-danger">Downloadcv</button>
      </a>
      
       </div>
    </div>
    </div>
  </section>
     </>
    )
  }
}
