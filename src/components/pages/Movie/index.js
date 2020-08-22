import React,{ useState } from 'react'
import MovieProfile from '../../MovieProfile'

export default function Movie({ match }) {
    const { id } = match.params;
    const [movieID,setMovieID] = useState(id);


    return (
        <>
          <MovieProfile id={movieID}/>
        </>
    )
}
