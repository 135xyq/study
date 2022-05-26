import React from 'react'
import Movie from './Movie'

export default function MovieList({movieList}) {
    const movies = movieList.map(item=><Movie {...item} key={item._id}></Movie>)
  return (
    <ul>
        {movies}
    </ul>
  )
}
