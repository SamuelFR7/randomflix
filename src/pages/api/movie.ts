import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const randomId = Math.floor(Math.random() * 1000)

  const randomMovie = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${randomId}?api_key=${process.env.API_KEY}&language=pt-BR`,
    )
      .then((response) => response.json())
      .then((data) => data)

    if (!result.title) {
      randomMovie()
    }

    return result
  }

  return res.status(200).json(await randomMovie())
}
