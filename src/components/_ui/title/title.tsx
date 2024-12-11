import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = HTMLAttributes<HTMLHeadingElement>

export function Title(data: TitleProps) {
  const { className, children, ...rest } = data
  return (
    <h1 className={twMerge('text-lg font-semibold', className)} {...rest}>
      {children}
    </h1>
  )
}
