export interface MovieProps {
  title: string
  overview: string
  poster_path: string
}

export default function Movie({ overview, poster_path, title }: MovieProps) {
  return (
    <div className="flex max-w-[630px] gap-[34px] flex-col md:flex-row items-center md:items-start px-[25px] md:px-0">
      <img
        className="w-[171px] h-[244px] mt-10"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie"
      />
      <div className="flex flex-col gap-4 items-center md:items-start ">
        <h2 className="font-bold text-[20px]">{title}</h2>
        <p className="text-[16px] max-overview">{overview}</p>
      </div>
    </div>
  )
}
