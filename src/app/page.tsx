import { Title } from '../components/Title'
import { Logo } from '../components/Logo'

export default function Homepage() {
  return (
    <div className="flex flex-col items-center mt-[126px] gap-[30px]">
      <Title />
      <button className="flex bg-button text-[12px] text-black px-4 py-3 items-center font-bold gap-[17px] rounded-md hover:bg-subtitle">
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
