import { Logo } from '../logo'

interface LoadingProps {
  open: boolean
}

export function Loading(data: LoadingProps) {
  const { open = false } = data

  if (!open) return null

  return (
    <div className="bg-primary-400 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <Logo className="z-20" />
      <div className="absolute h-40 w-40 rounded-full bg-primary-800 z-10"></div>
      <div className="absolute h-44 w-44 rounded-full bg-gradient-to-t to-primary-500 from-primary-950 animate-spin"></div>
    </div>
  )
}
