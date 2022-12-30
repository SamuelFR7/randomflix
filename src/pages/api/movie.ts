import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  async function getMovie() {
    let result = {
      title: '',
      overview: '',
      poster_path: '',
    }

    while (!result.title || !result.overview || !result.poster_path) {
      const randomId = Math.floor(Math.random() * 1000)

      result = await fetch(
        `https://api.themoviedb.org/3/movie/${randomId}?api_key=${process.env.API_KEY}&language=pt-BR`,
      )
        .then((response) => response.json())
        .then((data) => data)
    }

    return result
  }

  const movie = await getMovie()

  return res.status(200).json(movie)
}
