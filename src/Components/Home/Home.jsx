import axios from 'axios'
import React, { useEffect } from 'react'

export default function Home() {
  async function getTrendingMovies(){
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
    console.log(data.results);
  }
  // component didMount
  useEffect(()=>{
    getTrendingMovies();
  } , [])
  return (
    <section className='container'>
      
    </section>
  )
}
