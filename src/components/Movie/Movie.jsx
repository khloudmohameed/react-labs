import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Movie() {
    let baseImgUrl = 'https://image.tmdb.org/t/p/original/' ;
    let [trendingMovies,setTrendingMovies]=useState([]);
 async function getItem()
    { 
     
      let {data}=await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=34eba96c39242fbc75f3360051aa23b8');
    
      setTrendingMovies(data.results);
    }
    useEffect(()=>{
        getItem();

    },[])
    let navigate=useNavigate()
    function goToDetais(id){
      navigate({
          pathname:'/detais',
          search:`?id=${id}`
      })

    }
  return (
    <>
     
  
    <div className='row'>
       {trendingMovies.map((movie,index)=>(
       <div onClick={()=>goToDetais(movie.id)} className='col-md-2 my-3' key={index}>
         <div >
           <img className='w-100' src={baseImgUrl + movie.poster_path} alt=""></img>
           <h5>{movie.title}</h5>
           </div>
       </div>

       ))}
       </div>

    
     </>
  );
}
