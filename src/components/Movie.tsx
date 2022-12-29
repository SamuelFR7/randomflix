export interface MovieProps {
  title: string
  overview: string
  poster_path: string
}

export default function Movie({ overview, poster_path, title }: MovieProps) {
  return (
    <div className="flex max-w-[630px] gap-[34px]">
      <img
        className="w-[171px] h-[244px] mt-2"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[20px]">{title}</h2>
        <p className="text-[16px]">{overview}</p>
      </div>
    </div>
  )
}
