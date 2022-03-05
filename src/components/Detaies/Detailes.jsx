import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


export default function Detailes() {
    let baseImgUrl = 'https://image.tmdb.org/t/p/original/' ;
    let [searchParam,setSearchParam]=useSearchParams();
    let [details,setDetailes]=useState({})
    let currentId=searchParam.get("id");
    async function getDetails()
    { 
     
      let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=34eba96c39242fbc75f3360051aa23b8`);
    
   setDetailes(data)
    }
    useEffect(()=>{
        getDetails();

    },[])
  return (
    <div className='mt-5'>
       <div className="row">
           <div className="col-md-4">
           <img className='w-100' src={baseImgUrl + details.poster_path} alt=""></img>
               </div>
               <div className="col-md-8">
               <h6>{details.overview}</h6>
                   </div>
           </div>
    </div>
  )
}