import { Logo } from './Logo'

export function Title() {
  return (
    <div className="flex flex-col items-center">
      <Logo width={88} height={63} />
      <h1 className="text-[40px] font-bold">Não sabe o que quer assistir?</h1>
    </div>
  )
}
