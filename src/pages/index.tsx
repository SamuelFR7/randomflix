'use client'
import { Title } from '../components/Title'
import { Logo } from '../components/Logo'
import { useState } from 'react'
import Movie, { MovieProps } from '../components/Movie'

export default function Homepage() {
  const [movie, setMovie] = useState<MovieProps>()

  async function handleGetMovie() {
    const getMovie = await fetch(`http://localhost:3000/api/movie`)
      .then((response) => response.json())
      .then((data: MovieProps) => data)

    setMovie(getMovie)
  }

  return (
    <div className="flex flex-col items-center mt-[126px] gap-[30px]">
      <Title />
      {movie && (
        <Movie
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
        />
      )}
      <button
        onClick={handleGetMovie}
        className="flex bg-button text-[12px] text-black px-4 py-3 items-center font-bold gap-[17px] rounded-md hover:bg-subtitle"
      >
        <Logo width={36} height={25} />
        <span>Encontrar filme</span>
      </button>
      <span className="text-center text-[14px]">
        Clique em {'"Encontrar filme"'} que traremos informações <br />
        de algum filme para você assistir hoje
      </span>
    </div>
  )
}
