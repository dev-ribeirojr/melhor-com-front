import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { iconsApp } from '../../../assets/icons'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button(data: ButtonProps) {
  const { isLoading = false, children, className, disabled, ...rest } = data

  return (
    <button
      className={twMerge(
        'bg-primary-50 px-6 py-2 border border-black rounded-md transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 flex gap-1 items-center justify-center',
        className,
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading && <iconsApp.loading className="animate-spin " />}
      {children}
    </button>
  )
}
