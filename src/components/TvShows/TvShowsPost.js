

import React from 'react'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import {useEffect,useState} from 'react'

import YouTube from 'react-youtube'


function TvShowsPost(props) {
    const [shows, setShows] = useState([]);
  
      useEffect(() => {
          axios.get(props.url).then((response) => {
            console.log("working");
            console.log(props.url)
              console.log(response.data.results);
              let movieDetails = response.data.results;
              console.log('images');
              console.log(movieDetails.backdrop_path);
              // for(let i=0; i=movieDeatails.length; i++){
              //     console.log(movieDeatails[i].backdrop_path);
              // }
              
              
              // movieDetails.map((obj)=>  {if(movieDetails.backdrop_path ){  setShows(movieDetails)} })
              movieDetails.map((obj)=>{if(obj.backdrop_path){setShows(response.data.results)}
          return movieDetails
          })
  
              
          })
       })
       return (
        <div className='row'>
         <h2>{props.title}</h2>
         <div className='posters'>
        {shows.map((obj,index)=>
      <img className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
           
         
         
         
         </div>
  
       
        </div>
      )
    };
export default TvShowsPost


