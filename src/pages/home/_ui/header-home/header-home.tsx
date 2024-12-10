import { Link } from 'react-router-dom'
import { Button } from '../../../../components'
import { iconsApp } from '../../../../assets/icons'

export function HeaderHome() {
  return (
    <div className="flex flex-col-reverse text-center items-center justify-between gap-2 mb-4 sm:flex-row">
      <h1 className="font-semibold text-lg mt-2 sm:mt-0">Produtos</h1>
      <Link to={'/registrar-produto'} className="w-full sm:w-fit">
        <Button className="w-full sm:w-fit">
          <div className="flex items-center justify-center">
            <iconsApp.plus size={14} />
            <iconsApp.phone size={20} />
          </div>
          Adicionar
        </Button>
      </Link>
    </div>
  )
}
