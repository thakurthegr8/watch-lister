import React from 'react'
import MoviesList from '../../MoviesList'
import axios from 'axios'

export default function Main(data) {
  console.log(data);
  return (
    <div>
      <MoviesList data= {data}/>
    </div>
  )
}


