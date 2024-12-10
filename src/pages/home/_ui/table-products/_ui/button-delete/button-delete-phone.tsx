import { useButtonDeletePhone } from './use-button-delete-phone'
import { iconsApp } from '../../../../../../assets/icons'

interface ButtonDeletePhoneProps {
  phoneCode: string
}

export function ButtonDeletePhone(data: ButtonDeletePhoneProps) {
  const { phoneCode } = data
  const { isLoading, deletePhone } = useButtonDeletePhone()

  return (
    <button
      disabled={isLoading}
      onClick={() => deletePhone(phoneCode)}
      className="border p-2 rounded transition-all hover:bg-primary-50"
    >
      {!isLoading && <iconsApp.trash size={16} />}
      {isLoading && <iconsApp.loading className="animate-spin" size={16} />}
    </button>
  )
}
