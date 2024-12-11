import { useButtonDeletePhone } from './use-button-delete-phone'
import { iconsApp } from '../../../../../../assets/icons'

interface ButtonDeletePhoneProps {
  phoneId: number
}

export function ButtonDeletePhone(data: ButtonDeletePhoneProps) {
  const { phoneId } = data
  const { isLoading, onSubmit } = useButtonDeletePhone()

  return (
    <button
      disabled={isLoading}
      onClick={() => onSubmit(phoneId)}
      className="border p-2 rounded transition-all hover:bg-primary-50"
    >
      {!isLoading && <iconsApp.trash size={16} />}
      {isLoading && <iconsApp.loading className="animate-spin" size={16} />}
    </button>
  )
}
