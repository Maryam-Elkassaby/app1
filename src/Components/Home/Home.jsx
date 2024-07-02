import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [TrendingMovies , setTrendingMovies] = useState([]);

  async function getTrendingMovies(){
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
    setTrendingMovies(data.results)
  }

  // component didMount
  useEffect(()=>{
    getTrendingMovies();
  } , [])
  return (
    <section className='container'>
      <div className="row">
        {TrendingMovies.map((movie)=><div className='col-md-2'>
          <h2 className='h6'>{movie.title}</h2>
        </div>)}
      </div>
    </section>
  )
}
