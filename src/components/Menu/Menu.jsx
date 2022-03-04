import axios from 'axios'
import React, { Component } from 'react'
import style from './Menu.module.css'

export default class Menu extends Component {
    state={
        products:[]
        }
       

    getProducts=async()=>
  { 
    let {data}=await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
    this.setState({products:data.products});
    
  }
  componentDidMount()
  {
    this.getProducts()
  }
  render() {
    return (
        <>
     
        <div className='container'> 
        <div className='row'>
           {this.state.products.map((product)=>
           <div className='col-md-3 my-3'>
             <div className='product'>
               <img className={`${style.imgheight} w-100`} src={product.image_url}></img>
               <h5>{product.title}</h5>
               </div>
   
           </div>
           )}
           </div>
   
        </div>
         </>
    )
  }
}
