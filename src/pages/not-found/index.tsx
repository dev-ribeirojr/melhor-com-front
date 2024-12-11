import { Button, Logo } from '@/components'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="bg-primary-900 flex-1 h-full flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center text-white text-center">
        <Logo className="ml-6" />
        <h1 className=" text-[120px] mt-[-50px]">404</h1>
        <p className="mt-[-20px]">Ops! página não encontrada!</p>
      </div>
      <Link to="/">
        <Button className="">Voltar para página inicial</Button>
      </Link>
    </main>
  )
}
