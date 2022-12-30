'use client'
import { Title } from '../components/Title'
import { Logo } from '../components/Logo'
import { useState } from 'react'
import Movie, { MovieProps } from '../components/Movie'
import { Loader } from '../components/Loader'
import classNames from 'classnames'

export default function Homepage() {
  const [movie, setMovie] = useState<MovieProps>()
  const [loading, setLoading] = useState(false)

  async function handleGetMovie() {
    setLoading(true)
    const getMovie = await fetch(`/api/movie`)
      .then((response) => response.json())
      .then((data: MovieProps) => data)

    setMovie(getMovie)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center mt-12 md:mt-[12.6rem] mb-12 md:mb-0 gap-8">
      <Title />
      {!loading && movie ? (
        <Movie
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
        />
      ) : null}
      {loading && <Loader stroke={'#fff'} width="64" height="64" />}
      <button
        onClick={handleGetMovie}
        className={classNames(
          'flex items-center justify-center bg-button',
          'text-xsm text-black px-4 py-3 font-bold gap-4 rounded-md ',
          'hover:bg-subtitle disabled:cursor-not-allowed',
        )}
        disabled={loading}
      >
        <Logo width={36} height={25} />
        <span>Encontrar filme</span>
      </button>
      <span className="text-center text-sm px-5 md:px-0 max-w-[38.1rem]">
        Clique em {'"Encontrar filme"'} que traremos informações de algum filme
        para você assistir hoje
      </span>
    </div>
  )
}
