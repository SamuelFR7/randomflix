export interface MovieProps {
  title: string
  overview: string
  poster_path: string
}

export default function Movie({ overview, poster_path, title }: MovieProps) {
  return (
    <div className="flex max-w-[63rem] gap-9 flex-col md:flex-row items-center md:items-start px-6 md:px-0">
      <img
        className="w-[17.1rem] h-[24.4rem] mt-8"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie"
      />
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-md max-overview">{overview}</p>
      </div>
    </div>
  )
}
