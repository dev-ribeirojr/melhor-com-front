import { twMerge } from 'tailwind-merge'
import { iconsApp } from '../../../../assets/icons'

import { Link } from 'react-router-dom'
import { useTableProducts } from './use-table-products'
import { ButtonDeletePhone } from './_ui'
import { formatColors, formatToBrl } from '../../../../utils'

export function TableProducts() {
  const { headerTableItems, phones } = useTableProducts()

  return (
    <div className="border border-black rounded-md overflow-x-auto whitespace-nowrap">
      <table className=" w-full">
        <thead className="p-2 h-14">
          <tr className="border-b border-black">
            {headerTableItems.map((item) => (
              <th className="text-left pl-4 " key={item.id}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {phones.map((phone, index) => (
            <tr
              key={phone.code}
              className={twMerge(
                'border-b border-black h-12',
                index + 1 === phones.length && 'border-none',
              )}
            >
              <td className="text-left pl-4 text-sm"> {phone.code}</td>
              <td className="text-left pl-4 text-sm">{phone.model}</td>
              <td className="text-left pl-4 text-sm">
                {formatToBrl(Number(phone.price))}
              </td>
              <td className="text-left pl-4 text-sm">{phone.brand}</td>
              <td className="text-left pl-4 text-sm">
                {formatColors(phone.color)}
              </td>
              <td className="text-right">
                <div className="flex items-center gap-2 justify-end px-4">
                  <Link
                    to={`/detalhes-do-produto/${phone.code}`}
                    className="border p-2 rounded hover:bg-primary-50 transition-all"
                  >
                    <iconsApp.edit size={16} />
                  </Link>
                  <ButtonDeletePhone phoneCode={phone.code} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
